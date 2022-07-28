import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../_models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  httpOption;
  constructor(private client: HttpClient) {
    this.httpOption={
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    };
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
  Register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    UserType: boolean
  ) {
    return this.client.post(`${environment.APIURL}/arusers/register`,
    {email:email,password:password,firstName:firstName,lastName:lastName,UserType:UserType},this.httpOption)
    .pipe(retry(2),catchError(this.handleError));
  }
}
