import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { IContactFormularFields } from './IContactFormularFields';
import { IMailTemplate } from './IMailTemplate';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
	standalone: true,
	imports: [
		FormsModule, MatFormFieldModule, MatInputModule,
		ReactiveFormsModule, NgIf, MatIconModule,
		MatButtonModule, MatSelectModule]
})
export class ContactComponent {
	emailFormControl = new FormControl('help', [Validators.required, Validators.email]);
	//selected = new FormControl('help', [Validators.required, Validators.pattern('help')]);

	//selectFormControl = new FormControl('help', [Validators.required, Validators.pattern('help')]);

	// nativeSelectFormControl = new FormControl('help', [
	// 	Validators.required,
	// 	Validators.pattern('help'),
	// ]);

	currentUrl: string = "";

	contactFormularFields: IContactFormularFields = {
		topic: "help",
		givenName: "",
		surname: "",
		mailAddress: "",
		mobilePhoneNumber: "",
		message: "Hallo Steffi, hallo Micha, "
	};

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		this.currentUrl = window.location.href; 
	}

	sendEmail(): void {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};

		var mailTemplate = this.convertContactFormularFieldsToMailTemplate(this.contactFormularFields);

		//Der Host-Teil der URL des aufgerufenen Backends muss aus CORS-Gründen der selbe sein wie der aktuelle Host-Teil vom Frontend
		// https://rent-a-herby.de:80/#/contact muss https://rent-a-herby.de:3000/api aufrufen
		// https://www.rent-a-herby.de:80/#/contact muss https://www.rent-a-herby.de:3000/api aufrufen
		// deshalb kann die Backend-URL nicht fest codiert sein. Sie wird jetzt also aus dem URL des Frontends ermittelt

		console.log("currentURL: " + this.currentUrl);

		const url = new URL(this.currentUrl);
		
		var backendUrl = "https://" + url.hostname + ":3000/api"
		
		console.log("Backend-URL: " + backendUrl);

		this.http.post(
			backendUrl + "/send-mail",
			mailTemplate,
			httpOptions)
			.pipe(
				catchError(this.handleError)
			).subscribe();
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

	private convertContactFormularFieldsToMailTemplate(contactFormularFields: IContactFormularFields): IMailTemplate {

		var subject = this.getTopicTranslation(contactFormularFields.topic);

		var mailBody =
			contactFormularFields.message + "\r\n" +
			"#############################\r\n" +
			"Name: " + contactFormularFields.givenName + " " + contactFormularFields.surname + "\r\n" +
			"Mail-Adresse: " + contactFormularFields.mailAddress + "\r\n" +
			"Telefon: " + contactFormularFields.mobilePhoneNumber;

		let result = {
			subject: subject,
			mailBody: mailBody,
		}

		return result;
	}

	private getTopicTranslation(value: string): string {

		switch (value) {
			case "help": {
				return "Hilfe rund um Herby angefragt";
			}
			case "accident": {
				return "Panne oder Unfall";
			}
			case "misc": {
				return "Sonstige Herby-Anfrage"
			}
			default: {
				return "HERBY"
			}
		}
	}
}
