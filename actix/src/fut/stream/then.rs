use std::pin::Pin;
use std::task::{Context, Poll};

use futures_core::ready;
use pin_project_lite::pin_project;

use crate::actor::Actor;
use crate::fut::{ActorFuture, ActorStream};

pin_project! {
    /// Stream for the [`then`](super::ActorStreamExt::then) method.
    #[derive(Debug)]
    #[must_use = "streams do nothing unless polled"]
    pub struct Then<S, Fn, Fut> {
        #[pin]
        stream: S,
        #[pin]
        future: Option<Fut>,
        f: Fn,
    }
}

pub(super) fn new<S, A, Fn, Fut>(stream: S, f: Fn) -> Then<S, Fn, Fut>
where
    S: ActorStream<A>,
    A: Actor,
    Fn: FnMut(S::Item, &mut A, &mut A::Context) -> Fut,
    Fut: ActorFuture<A>,
{
    Then {
        stream,
        f,
        future: None,
    }
}

impl<S, A, Fn, Fut> ActorStream<A> for Then<S, Fn, Fut>
where
    S: ActorStream<A>,
    A: Actor,
    Fn: FnMut(S::Item, &mut A, &mut A::Context) -> Fut,
    Fut: ActorFuture<A>,
{
    type Item = Fut::Output;

    fn poll_next(
        self: Pin<&mut Self>,
        act: &mut A,
        ctx: &mut A::Context,
        task: &mut Context<'_>,
    ) -> Poll<Option<Self::Item>> {
        let mut this = self.project();

        Poll::Ready(loop {
            if let Some(fut) = this.future.as_mut().as_pin_mut() {
                let item = ready!(fut.poll(act, ctx, task));
                this.future.set(None);
                break Some(item);
            } else if let Some(item) = ready!(this.stream.as_mut().poll_next(act, ctx, task)) {
                this.future.set(Some((this.f)(item, act, ctx)));
            } else {
                break None;
            }
        })
    }
}
