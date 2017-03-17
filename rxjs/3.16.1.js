const Rx = require('rxjs/Rx');

const observable_1 = Rx.Observable.interval(400);
const observable_2 = Rx.Observable.interval(300);

const subscription = observable_1.subscribe(x => console.log(`First: ${x}`));
const childSubscription = observable_2.subscribe(x => console.log(`Second: ${x}`));

subscription.add(childSubscription);

setTimeout(() => subscription.unsubscribe(), 1000);