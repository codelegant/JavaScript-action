const Rx=require('rxjs/Rx');

const source=Rx.Observable.from([1,2,3]);
const subject=new Rx.Subject();
const multicasted=source.multicast(subject);

multicasted.subscribe({
  next:v=>console.log(`observerA: ${v}`),
});

multicasted.subscribe({
  next:v=>console.log(`observerB: ${v}`),
});

multicasted.connect();