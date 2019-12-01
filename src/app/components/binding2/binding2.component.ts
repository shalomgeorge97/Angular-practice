import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "app-binding2",
  templateUrl: "./binding2.component.html",
  styleUrls: ["./binding2.component.css"],
  outputs: ["confirmed "],
  inputs: ["myself"]
})
export class Binding2Component {
  myself = { name: "", age: "" };
  isFilled = false;
  isValid = false;
  confirmed = new EventEmitter<{ name: string; age: string }>();

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

  onConfirm() {
    this.confirmed.emit(this.myself);
  }
}
