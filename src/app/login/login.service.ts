import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './../../model/user.model';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpClient
  ) { }

  login(user: User): Observable<any> {
    return this.http.post('http://localhost:5000/login', user).pipe(
      map(res => {
        return res as Response
      })
    )
    catchError(this.handleError);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}
