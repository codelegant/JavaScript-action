const Rx = require('rxjs/Rx');

const observable = new Rx.Observable(observer => {
  const intervalId = setInterval(() => observer.next(Date.now()), 1000);
  return () => clearInterval(intervalId);
});

const subscription = observable.subscribe(x => console.log(x));
// const subscription2 = observable.subscribe(x => console.log(x));

setTimeout(() => subscription.unsubscribe(), 3000);