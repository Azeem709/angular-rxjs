# angular-rxjs

CheatSheet : 

Observable : Observables are unicast( where each observer own it own independent execution context)

Subject : are special type of Observables which are multicasted(lile event emitter contains the registery of listeners).Useful when want to emit values to multiple observers.

Special Variant of Subject - 

BehaviourSubject : maintains/persist the last emitted value which observer can subscribe though

ReplaySubject : maintain list of last emitted values (will have to provide the buffer how many we want it to maintain)

AsynSubject : Its like BehaviourSubject subject it emits last value to observers but it emits only when the subject is completed ( when complete() call back is called)




// creational Operator
  /**
   * Operators : of,from
   * from - can be used when input is array's or iterables or promises
   * of - it emits each object where as of operator will print the arraty as declerative
   */

    testArray = ["Value1", "value2", "value3"];
    let fromObservable = from(this.testArray);
    let ofObservable = of(this.testArray);


    ofObservable.subscribe(res => console.log(res)); // return ["Value1", "value2", "value3"]

    fromObservable.subscribe(res => console.log(res)); // value1 value2 value3




/**
  Non creational Operators
 * Pipe  - operator is used combine multiple rxjs operators(other than creational) to form a data pipeline
 * it is considered best practise to use the pipe operator even though we are using single operator
 * 
 * filter - operator takes a predicate function as input and retuns filtered observable 
 * 
 */


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-27gwhd)