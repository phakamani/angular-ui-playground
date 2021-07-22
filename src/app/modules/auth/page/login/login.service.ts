import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../../../../data/types/user.model';
import { Response } from '../../../../data/types/response.model';


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
    return throwError(error);
  }
}
