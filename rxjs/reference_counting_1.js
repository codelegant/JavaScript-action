const Rx = require('rxjs/RX');

const source = Rx.Observable.interval(500);
const subject = new Rx.Subject();
const multicasted = source.multicast(subject);
let subscription_1, subscription_2, subscriptionConnect;

console.log('observerA subscribed');
subscription_1 = multicasted.subscribe({
  next: v => console.log(`observerA: ${v}`),
});
subscriptionConnect = multicasted.connect();

setTimeout(() => {
  console.log('observerB subscribed');
  subscription_2 = multicasted.subscribe({
    next: v => console.log(`observerB: ${v}`),
  });
}, 600);

setTimeout(() => {
  console.log('observerA unsubscribed');
  subscription_1.unsubscribe();
}, 1200);

setTimeout(() => {
  console.log('observerB unsubscribed');
  subscription_2.unsubscribe();
  subscriptionConnect.unsubscribe();
}, 2000);