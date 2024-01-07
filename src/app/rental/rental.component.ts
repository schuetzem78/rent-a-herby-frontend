import { Component } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent {

  energySource: String = "Gas";

  selectGas() : void {
    this.energySource = "Gas";
  }

  selectStrom() : void {
    this.energySource = "Strom";
  }
}
