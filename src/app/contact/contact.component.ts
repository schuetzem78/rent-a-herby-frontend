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
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
	selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  	nativeSelectFormControl = new FormControl('valid', [
    	Validators.required,
    	Validators.pattern('valid'),
  	]);

	contactFormularFields: IContactFormularFields = { 
		givenName: "", 
		surname: "",
		mailAddress: "",
		mobilePhoneNumber: "",
		message: "Hallo Steffi, hallo Micha, "
	};

    constructor(private http: HttpClient) {
    }

    sendEmail(): void {
        console.log("E-Mail wird versendet...");
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
    	};

		var mailTemplate = this.convertContactFormularFieldsToMailTemplate(this.contactFormularFields);

		console.log(mailTemplate);

		// this.http.post(            
		// 	"http://rent-a-herby.785vrh4ungtam6ne.myfritz.net:3000/sendmail",
        //     mailTemplate,
        //     httpOptions)
        //     .pipe(
        //         catchError(this.handleError)
        //     ).subscribe();

        console.log("E-Mail wurde versendet");
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

		console.log(contactFormularFields.givenName);
		
		var mailBody = 
			contactFormularFields.message + "\r\n" + 
			contactFormularFields.givenName + " " + contactFormularFields.surname + "\r\n" + 
			contactFormularFields.mailAddress + "\r\n" + 
			contactFormularFields.mobilePhoneNumber;
		
		let result = {
        	subject: "Frage / Problem bzgl. Herby",
        	text: mailBody, 
		}

		return result;
	}
}
