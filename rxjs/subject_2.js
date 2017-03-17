const Rx = require('rxjs/Rx');

const subject=new Rx.Subject();

subject.subscribe({
  next: v => console.log(`ObserverA: ${v}`)
});

subject.subscribe({
  next: v => console.log(`ObserverB: ${v}`)
});

const observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject);