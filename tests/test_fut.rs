use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;
use std::time::{Duration, Instant};

use actix::prelude::*;
//use futures::stream::futures_ordered;
use tokio_timer::Delay;

struct MyActor {
    timeout: Arc<AtomicBool>,
}

#[derive(PartialEq, Copy, Clone)]
enum Error {
    Timeout,
    Generic,
}

impl Actor for MyActor {
    type Context = actix::Context<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        // TODO: ActorFuture combinators not implemented
        /*
        async {
            tokio_timer::delay(Instant::now() + Duration::new(0, 5_000_000)).await;
            System::current().stop();

        }.into_actor(self).timeout(Duration::new(0, 100)).wait(ctx)
        */

            /*
            .then(|_| {
                Ok::<_, Error>(())
            })

            .into_actor(self)
            .timeout(Duration::new(0, 100), Error::Timeout)
            .map_err(|e, act, _| {
                if e == Error::Timeout {
                    act.timeout.store(true, Ordering::Relaxed);
                    System::current().stop();
                    ()
                }
            })
            .wait(ctx)
            */
    }
}

//TODO: #[test]
fn test_fut_timeout() {
    let timeout = Arc::new(AtomicBool::new(false));
    let timeout2 = Arc::clone(&timeout);

    System::run(move || {
        let _addr = MyActor { timeout: timeout2 }.start();
    })
    .unwrap();

    assert!(timeout.load(Ordering::Relaxed), "Not timeout");
}

struct MyStreamActor {
    timeout: Arc<AtomicBool>,
}

impl Actor for MyStreamActor {
    type Context = actix::Context<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        /*
        let s = futures_ordered(vec![
            tokio_timer::delay(Instant::now() + Duration::new(0, 5_000_000)),
            tokio_timer::delay(Instant::now() + Duration::new(0, 5_000_000)),
        ]);

        s.map_err(|_| Error::Generic)
            .into_actor(self)
            .timeout(Duration::new(0, 1000), Error::Timeout)
            .map_err(|e, act, _| {
                if e == Error::Timeout {
                    act.timeout.store(true, Ordering::Relaxed);
                    System::current().stop();
                }
            })
            .finish()
            .wait(ctx)
            */
    }
}

// TODO: #[test]
fn test_stream_timeout() {
    let timeout = Arc::new(AtomicBool::new(false));
    let timeout2 = Arc::clone(&timeout);

    System::run(|| {
        let _addr = MyStreamActor { timeout: timeout2 }.start();
    })
    .unwrap();

    assert!(timeout.load(Ordering::Relaxed), "Not timeout");
}


#[test]
fn test_runtime() {
    System::run(||{


        Arbiter::spawn(async {
            println!("Before");
            let _ = tokio_timer::delay(Instant::now() + Duration::new(0,1_000 )).await;
            println!("after");
            System::current().stop();
        });
    });
}