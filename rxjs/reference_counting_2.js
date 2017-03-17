const Rx = require('rxjs/Rx');

const source = Rx.Observable.interval(500);
const subject = new Rx.Subject();
const refCounted = source.multicast(subject).refCount();
let subscription_1, subscription_2, subscriptionConnect;

// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed');
subscription_1 = refCounted.subscribe({
  next: v => console.log(`observerA: ${v}`)
});

setTimeout(() => {
  console.log('observerB subscribed');
  subscription_2 = refCounted.subscribe({
    next: v => console.log(`observerB: ${v}`)
  });
}, 600);

setTimeout(() => {
  console.log('observerA unsubscribed');
  subscription_1.unsubscribe();
}, 1200);

// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log('observerB unsubscribed');
  subscription_2.unsubscribe();
}, 2000);