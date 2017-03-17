const Rx = require('rxjs/Rx');

//Observables are like functions with zero arguments,
// but generalize those to allow multiple values.
const observable = new Rx.Observable(function subscribe(observer) {
  try {
    observer.next(1);       //In an Observable Execution, 
    observer.next(2);       //zero to infinite Next notifications may be delivered.
    observer.next(3);   
    observer.complete();    //If either an Error or Complete notification is delivered,
  } catch (err) {
    observer.error(err);    //then nothing else can be delivered afterwards.
  }
  return function unsubscribe() {
    console.log('Unsubscribe');
  }
});

//Observers are just objects with three callbacks, 
//one for each type of notification that an Observable may deliver.
const observer = {
  next: x => console.log(x),
  error: err => console.error(`Observer got an error: ${err}`),
  complete: () => console.log('Observer got a complete nofitication.'),
};

//A Subscription essentially just has an unsubscribe() function 
//to release resources or cancel Observable executions.
const subscription = observable.subscribe(observer);
subscription.unsubscribe();