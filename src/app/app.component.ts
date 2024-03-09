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
		new Picture("./../assets/img/Herby1.jpg", "", ""), 
		new Picture("./../assets/img/Herby2.jpg", "", ""), 
		new Picture("./../assets/img/Norwegen.JPG", "", ""), 
		new Picture("./../assets/img/Norwegen2.jpg", "", ""), 
		new Picture("./../assets/img/Norwegen3.jpg", "", "")
	];

	responsiveOptions = [
		{
			breakpoint: '1024px',
			numVisible: 4,
			numScroll: 4
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
	srcset: string = "";
	sizes: string = "";

	constructor(imagePath: string, srcset: string, sizes: string) {
		this.imagePath = imagePath;
		this.srcset = srcset;
		this.sizes = sizes;
	}
}
