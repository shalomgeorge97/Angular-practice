import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PuzzleComponent } from "./components/puzzle/puzzle.component";
import { FormsModule } from "@angular/forms";
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { Binding2Component } from './components/binding2/binding2.component';
import { Binding1Component } from './components/binding1/binding1.component';

@NgModule({
  declarations: [AppComponent, PuzzleComponent, PropertyBindingComponent, Binding2Component, Binding1Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
