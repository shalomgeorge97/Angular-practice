import { Component, EventEmitter } from "@angular/core";

@Component({
  selector: "app-property-binding",
  templateUrl: "./property-binding.component.html",
  styleUrls: ["./property-binding.component.css"],
  inputs: ["name:myName"],
  outputs: ["hobbiesChanged"]
})
export class PropertyBindingComponent {
  myName = "";
  hobbiesChanged = new EventEmitter<string>();

  onHobbiesChanged(hobbies: string) {
    this.hobbiesChanged.emit(hobbies);
  }
}
