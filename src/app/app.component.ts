import { Component, VERSION } from '@angular/core';
import { version } from './../../package.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
  
	AppVersion = version;

  	herbyPictures = [
		new Picture("./../assets/img/Herby1.jpg"), 
		new Picture("./../assets/img/Herby2.jpg"), 
		new Picture("./../assets/img/Norwegen.JPG"), 
		new Picture("./../assets/img/Norwegen2.jpg"), 
		new Picture("./../assets/img/Norwegen3.jpg")
	];
}

export class Picture{  
	imagePath: string = "";

	constructor(imagePath: string) {
		this.imagePath = imagePath;
	}
}
