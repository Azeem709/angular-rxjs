import { Component, OnInit } from "@angular/core";
import { from, Observable, of, pipe } from "rxjs";
import { filter, first, map } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "RXJS TUTORIAL";
  testArray = ["value1", "value1", "value2", "value3", "value2"];

  ngOnInit(): void {
    this.basicObservableCreation();
    this.creationalOperator();
    this.pipeableOperator();
  }

  /**
   * Creation through Observable
   * or can be created from the creational operators
   */
  basicObservableCreation() {
    const foo = new Observable(subscriber => {
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
      subscriber.complete();
      subscriber.next(4); // Is not delivered because it would violate the contract
    });
    foo.subscribe(res => console.log(res));
  }

  // creational Operator
  /**
   * Operators : of,from
   * from - can be used when input is array's or iterables or promises
   * of - it emits each object where as of operator will print the arraty as declerative
   */
  creationalOperator() {
    let fromObservable = from(this.testArray);
    let ofObservable = of(this.testArray);
    ofObservable.subscribe(res => console.log(res));
    fromObservable.subscribe(res => console.log(res));
  }

  /**
   *  "A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous Observable stays unmodified."
   *
   * Pipe  - operator is used combine multiple rxjs operators(other than creational) to form a data pipeline
   * it is considered best practise to use the pipe operator even though we are using single operator
   *
   *
   * filter - operator takes a predicate function as input and retuns filtered observable
   *
   *
   * first - operator return the first element
   *       - also takes predicate function as input can be useful while we just single single from the observable
   */
  pipeableOperator() {
    let filterOperator = from(this.testArray);
    filterOperator
      .pipe(filter(op => op == "value2"))
      .subscribe(res => console.log(res));

    let firstOperator = from(this.testArray);
    firstOperator.pipe(first()).subscribe(res => console.log(res)); //value1
    let firstPredicateObservale = from(this.testArray);
    firstPredicateObservale
      .pipe(first(val => val == "value2"))
      .subscribe(res => console.log(res));

    // map
    let numsObserver = from([1, 2, 3, 4]);
      numsObserver.pipe(
        map(val => val*val )
      )
      .subscribe(res=> console.log(res))
  }
}
