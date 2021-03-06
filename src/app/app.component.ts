import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "RXJS TUTORIAL";
  testArray = ["Value1", "value2", "value3"];

  ngOnInit(): void {
    this.creationalOperator();
    this.nonCreationalOperator();
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
 * Pipe  - operator is used combine multiple rxjs operators(other than creational) to form a data pipeline
 * it is considered best practise to use the pipe operator even though we are using single operator
 * 
 * filter - operator takes a predicate function as input and retuns filtered observable 
 * 
 */
  nonCreationalOperator(){
       let filterOperator = from(this.testArray);
       filterOperator.pipe(filter(op => op == "value2"))
            .subscribe(res => console.log(res))
  }
}
