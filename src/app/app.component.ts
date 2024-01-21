import { Component, VERSION } from '@angular/core';
import { version } from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  AppVersion = version;


  products = [new Product(), new Product, new Product];
}


export class Product{
  name="Produktname";
  price="0,11";
  image="./../assets/img/rental.jpg"

}
