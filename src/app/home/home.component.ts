import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';
import { INotOptimalImageSize } from '../../common/INotOptimalImageSize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

	imagePathWohnmobilvermietung = '../../assets/img/herby2/herby2-w192.jpg';
	imagePathTravelAccessories = '../../assets/img/board/board-w400.jpg'

	constructor(
		private cdRef: ChangeDetectorRef, 
		private http: HttpClient) {
	}

	ngAfterViewInit(): void {
		
		this.imagePathWohnmobilvermietung = this.getImagePath("herby2", "imageWohnmobilVermietungId", new Array(192, 448, 4032));
		this.imagePathTravelAccessories = this.getImagePath("board", "imageTravelAccessoriesId", new Array(400, 600, 4032));
		
		this.cdRef.detectChanges(); 
  	}

	private getImagePath(imageName: string, elementId: string, availableImageSizes: Array<number>): string {
		
		let htmlElement = document.getElementById(elementId);
		
		if (htmlElement === undefined || htmlElement == null) {
			return "";
		}

		let width = 0;
		
		width = htmlElement.offsetWidth;

		let picName: String = imageName + "-w" + availableImageSizes[availableImageSizes.length - 1] + ".jpg";

		for (const availableImageSize of availableImageSizes) {
			if (width <= availableImageSize) {
				picName = imageName + "-w" + availableImageSize + ".jpg";
				break;
			}
		}
		
		if (!availableImageSizes.includes(width)) {
			console.warn("'" + imageName + "' -> not optimal image resolution -> " + width);

			//var backendUrl = "http://localhost:3000";
			// var backendUrl = "http://rent-a-herby.785vrh4ungtam6ne.myfritz.net:3000";

			// let notOptimalImageSize = this.getNotOptimalImageSizeObject(imageName, width);
	
			// const httpOptions = {
			// 	headers: new HttpHeaders({
			// 		'Content-Type': 'application/json'
			// 	})
			// };

			// this.http.post(
			// 	backendUrl + "/not-optimal-image-size",
			// 	notOptimalImageSize,
			// 	httpOptions)
			// 	.pipe(
			// 		catchError(this.handleError)
			// 	).subscribe();
		}

		const imagePath = "../../assets/img/" + imageName + "/" + picName;
		console.log("imagePath at homeComponent: " + imagePath);

		return imagePath;
	}

	private handleError(error: HttpErrorResponse): Observable<never> {
		if (error.status === 0) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error);
			alert('An error occurred');
		}
		else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
				`Backend returned code ${error.status}, body was: `, error.error);

			alert('An error occurred');
		}

		// Return an observable with a user-facing error message.
		return throwError(() => new Error('Something bad happened; please try again later.'));
	}

	private getNotOptimalImageSizeObject(imageName: string, requestedImageSize: number): INotOptimalImageSize {

		let clientInformation = {
			currentDateTime: this.dateToString_YYYY_MM_dd_HH_mm_ss(new Date()),
			browser: navigator.userAgent,
			browserLanguage: navigator.language,
			screenWidth: screen.width,
			screenHeight: screen.height,
			screenAvailWidth: screen.availWidth,
			screenAvailHeight: screen.availHeight,
			screenColorDepth: screen.colorDepth,
			screenPixelDepth: screen.pixelDepth,
			screenOrientation: screen.orientation.angle.toString(),
			innerWidth: innerWidth,
			innerHeight: innerHeight
		}

		let result = {

			imageName: imageName,
			requestedImageSize: requestedImageSize,
			clientInformation: clientInformation
		}

		console.log(result);

		return result;
	}

	private dateToString_YYYY_MM_dd_HH_mm_ss(date: Date): string {
    
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
	
		var dateOfString = date.getFullYear() + "-";
		dateOfString += (("" + day).length < 2 ? "0" : "") + day + "-";
		dateOfString += (("" + month).length < 2 ? "0" : "") + month + "-";
		dateOfString += (("" + hour).length < 2 ? "0" : "") + hour + "-";
		dateOfString += (("" + minutes).length < 2 ? "0" : "") + minutes + "-";
		dateOfString += (("" + seconds).length < 2 ? "0" : "") + seconds;
	
		return dateOfString;
	}
}
