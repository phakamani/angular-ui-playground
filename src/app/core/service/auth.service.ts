import { User } from './../../data/types/user.model';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'src/app/data/types/response.model';
import { values } from 'cypress/types/lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public http: HttpClient
  ) { }

  login(user: User): Observable<any> {
    let params = new HttpParams()
      .set('name',user.userName)
      .set('password', user.password); //Create new HttpParams
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(
      `https://angular-playground-23023-default-rtdb.firebaseio.com/register.json`).pipe(
      map(res => {
        let isUserFound = false;
        let response = Object.values(res);

        for(let value of response) {
          isUserFound = value['name'] === user.userName && value['password'] === user.password;
          if (isUserFound) {
            return {
              status: 'success',
              message: 'login successful'
            }
          }
        }

        return {
          status: 'error',
          message: 'No matching user name and password found'
        }
      })
    )
    catchError(this.handleError);
  }

  handleError(error: HttpErrorResponse) {
    return throwError({
      status: 'error',
      message: 'could not log in'
    });
  }
}
