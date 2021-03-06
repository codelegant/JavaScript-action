const Rx = require('rxjs/Rx');
const foo = Rx.Observable.create(observer => {
  console.log('Hello');
  observer.next(42);
});

foo.subscribe(x => console.log(x));

foo.subscribe(y => console.log(y));