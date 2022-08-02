import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = " http://localhost:8080";
  User: any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }

  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAllUserDetails(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/getAllUser')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  addUserDetails(post: any): Observable<any> {

    return this.httpClient.post(this.apiURL + '/addUserData', post, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }
  getUserDetailsObject() {
    return this.User;
  }
  setUserDetailsObject(data: any) {
    this.User = data;
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}