import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-binding1",
  templateUrl: "./binding1.component.html",
  styleUrls: ["./binding1.component.css"],
  outputs: ["submitted"],
  inputs: ["myself"]
})
export class Binding1Component {
  myself = { name: "", age: "" };
  isFilled = false;
  isValid = false;
  submitted = new EventEmitter<{ name: string; age: string }>();

  onKeyUp() {
    if (this.myself.name != "" && this.myself.age != "") {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
    if (this.myself.name != "" && /^[0-9]+$/.test(this.myself.age)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  onSubmit() {
    this.submitted.emit(this.myself);
  }
}
