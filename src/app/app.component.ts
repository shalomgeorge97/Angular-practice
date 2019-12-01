import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "TODO list";
  name = "";
  hobbies = "";
  myself = { name: "", age: "" };
  confirmedMyself = { name: "", age: "" };

  onSubmit(myself: { name: string; age: string }) {
    this.myself = { name: myself.name, age: myself.age };
  }
  onConfirm(myself: { name: string; age: string }) {
    this.confirmedMyself = { name: myself.name, age: myself.age };
  }
}
