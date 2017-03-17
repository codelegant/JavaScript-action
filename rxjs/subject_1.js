const Rx = require('rxjs/Rx');
const subject = new Rx.Subject();

subject.subscribe({
  next: v => console.log(`ObserverA: ${v}`)
});

subject.subscribe({
  next:v=>console.log(`ObserverB: ${v}`)
});

subject.next(1);
subject.next(2);