import { Component } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  refrigeratorEnergySource: String = "Gas";
  boilerEnergySource: String = "Gas";

  selectRefrigeratorGas() : void {
    this.refrigeratorEnergySource = "Gas";
  }

  selectRefrigeratorStrom() : void {
    this.refrigeratorEnergySource = "Strom";
  }

  selectBoilerGas() : void {
    this.boilerEnergySource = "Gas";
  }

  selectBoilerStrom() : void {
    this.boilerEnergySource = "Strom";
  }
}
