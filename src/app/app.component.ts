import { Component, OnInit } from "@angular/core";
import { from, of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "RXJS TUTORIAL";

  // creational Operator
  /**
   * from - can be used when input is array's or iterables or promises
   * it emits each object where as of operator will print the arraty as declerative
   */
  creationalOperator() {
    let testArray = ["Value1", "value2", "value3"];
    let ofObservable = from(testArray);
    let fromObservable = of(testArray);
    ofObservable.subscribe(res => console.log(res));
    fromObservable.subscribe(res => console.log(res));
  }

  ngOnInit(): void {
    this.creationalOperator();
  }
}
