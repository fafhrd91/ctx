use std::pin::Pin;
use std::sync;
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};

use futures::channel::oneshot::{self, Canceled};
use futures::FutureExt;
use futures::StreamExt;
use tokio::time::{delay_for, Duration, Instant};

use actix::fut::wrap_future;
use actix::prelude::dev::MessageResponse;
use actix::prelude::*;
use actix::{AsyncHandler, AsyncMessage, TempRef};

type OriginalActorResponse = ();
type MessageError = ();
type DeferredWorkResult = Result<OriginalActorResponse, MessageError>;

#[derive(Debug, Clone, Copy)]
struct Num(usize);

impl Message for Num {
    type Result = usize;
}

impl AsyncMessage for Num {}

struct MyActor {
    count: usize,
}

impl Actor for MyActor {
    type Context = actix::Context<Self>;
}

impl AsyncHandler<Num> for MyActor {
    type Result = Pin<Box<dyn Future<Output = <Num as Message>::Result>>>;

    fn handle(mut this: TempRef<Self>, msg: Num, _ctx: TempRef<Self::Context>) -> Self::Result {
        let res = tokio::task::spawn(async move {
            this.as_mut().count += msg.0;
            this.as_ref().count
        });

        Box::pin(async move { res.await.unwrap() })
    }
}

#[actix_rt::test]
async fn test_async_actor() {
    let items = vec![Num(1), Num(1), Num(2), Num(3), Num(5), Num(8), Num(13)];

    let addr = MyActor { count: 0 }.start();

    use futures::{future::ready, join, FutureExt, StreamExt};

    let fut = futures::stream::iter(items.clone())
        .map(move |i| addr.send(i))
        .buffer_unordered(7)
        .fold(vec![], |mut acc, res| {
            acc.push(res.unwrap());
            ready(acc)
        });

    let result = fut.await;

    assert_eq!(result, vec![1, 2, 4, 7, 12, 20, 33]);
}