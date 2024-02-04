import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http:HttpClient) {

  }

  sendEmail() : void {

    console.log("E-Mail wird versendet...");

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'POST',
    //     'Access-Control-Allow-Credentials': 'true'
    //   })
    // };

    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    this.http.post(
      "http://localhost:3000/sendmail", 
      "{ " + 
      "    \"subject\": \"asdfasdf\", " + 
      "    \"text\": \"das ist der E-Mail-Body\" " + 
      "}", httpOptions)
      .pipe(
        catchError(this.handleError)
      ).subscribe();

      console.log("E-Mail wurde versendet");
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
