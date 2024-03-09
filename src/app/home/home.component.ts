import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { INotOptimalImageSize } from '../../common/INotOptimalImageSize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

	imagePathWohnmobilvermietung = '../../assets/img/herby2/herby2-w192.jpg';
	imagePathTravelAccessories = '../../assets/img/board/board-w400.jpg'

	@ViewChild('imageWohnmobilVermietung')
	camperRentalImage: ElementRef | undefined;

	@ViewChild('imageTravelAccessories')
	travelAccessoriesImage : ElementRef | undefined;

	constructor(
		private cdRef: ChangeDetectorRef, 
		private http: HttpClient) {
	}

	ngAfterViewInit(): void {
		
		this.handleCamperRentalImage();
		this.handleTravelAccessoriesImage();

		this.cdRef.detectChanges(); 
  	}

	private handleCamperRentalImage() {

		const imageName = 'herby2';
		let width = this.camperRentalImage?.nativeElement.offsetWidth;

		console.log('ngAfterViewInit - Width: ' + width);
		let picName: String

		if (width <= 192) {
			picName = 'herby2-w192.jpg';
		} else if (width <= 448) {
			picName = 'herby2-w448.jpg';
		} else {
			picName = 'herby2-w4032.jpg';
		}

		if (width != 192 && width != 448) {
			console.warn('not optimal image resolution');

			//var backendUrl = "http://localhost:3000";
			var backendUrl = "http://rent-a-herby.785vrh4ungtam6ne.myfritz.net:3000";

			let notOptimalImageSize = this.getNotOptimalImageSizeObject("Herby2", width);
	
			const httpOptions = {
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				})
			};

			this.http.post(
				backendUrl + "/not-optimal-image-size",
				notOptimalImageSize,
				httpOptions)
				.pipe(
					catchError(this.handleError)
				).subscribe();
		}

		this.imagePathWohnmobilvermietung = "../../assets/img/" + imageName + "/" + picName;
	}

	private handleTravelAccessoriesImage() {

		let width = this.travelAccessoriesImage?.nativeElement.offsetWidth;

		const imageName = 'board';

		console.log("'" + imageName + "' -> Required width: " + width);

		let picName: String

		if (width <= 400) {
			picName = 'board-w400.jpg';
		} else if (width <= 600) {
			picName = 'board-w600.jpg';
		} else {
			picName = 'board-w4032.jpg';
		}

		if (width != 400) {
			console.warn("'" + imageName + "' -> not optimal image resolution");

			//var backendUrl = "http://localhost:3000";
			var backendUrl = "http://rent-a-herby.785vrh4ungtam6ne.myfritz.net:3000";

			let notOptimalImageSize = this.getNotOptimalImageSizeObject("board", width);
	
			const httpOptions = {
				headers: new HttpHeaders({
					'Content-Type': 'application/json'
				})
			};

			this.http.post(
				backendUrl + "/not-optimal-image-size",
				notOptimalImageSize,
				httpOptions)
				.pipe(
					catchError(this.handleError)
				).subscribe();
		}

		this.imagePathTravelAccessories = "../../assets/img/" + imageName + "/" + picName;
		
		console.log("#### " + this.imagePathTravelAccessories);
	}

	private handleError(error: HttpErrorResponse) {
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

	private getNotOptimalImageSizeObject(imageName: string, requestedImageSize: string): INotOptimalImageSize {

		let clientInformation = {
			Browser: navigator.userAgent,
			BrowserLanguage: navigator.language,
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

		return result;
	}
}
