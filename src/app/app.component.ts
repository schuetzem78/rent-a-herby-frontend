import { Component } from '@angular/core';
import { version } from './../../package.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
  
	AppVersion = version;

  	herbyPictures = [
		new Picture("./../assets/img/headerSmall/Herby1.jpg"), 
		new Picture("./../assets/img/headerSmall/Herby2.jpg"), 		
		new Picture("./../assets/img/headerSmall/HerbyInnen-1.jpg"),
		new Picture("./../assets/img/headerSmall/HerbyInnen-3.jpg"),
		new Picture("./../assets/img/headerSmall/HerbyInnen-5.jpg"),		
		new Picture("./../assets/img/headerSmall/HerbyInnen-7.jpg"),
		new Picture("./../assets/img/headerSmall/HerbyInnen-8.jpg"),
		new Picture("./../assets/img/headerSmall/HerbyInnen-9.jpg"),
		new Picture("./../assets/img/headerSmall/Norwegen.jpg"), 
		new Picture("./../assets/img/headerSmall/Norwegen2.jpg"), 
		new Picture("./../assets/img/headerSmall/Norwegen3.jpg"),
	];

	responsiveOptions = [
		{
			breakpoint: '1024px',
			numVisible: 6,
			numScroll: 2
		},
		{
			breakpoint: '1024px',
			numVisible: 4,
			numScroll: 2
		},
		{
			breakpoint: '810px',
			numVisible: 3,
			numScroll: 3
		},
		{
			breakpoint: '560px',
			numVisible: 2,
			numScroll: 2
		}
	];
}

export class Picture{  
	imagePath: string = "";

	constructor(imagePath: string) {
		this.imagePath = imagePath;
	}
}
