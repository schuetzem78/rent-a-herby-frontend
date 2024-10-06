import { Component } from '@angular/core';

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrl: './qanda.component.css'
})
export class QandaComponent {
  
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
