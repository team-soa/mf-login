import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Clases/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL = 'http://localhost:4002/users';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  public hacerLogin(user: User): Observable<Object>{
    return this.http.post(this.URL + '/login', user);
  }

  // tslint:disable-next-line:ban-types
  public registraUsuario(user: User): Observable<Object>{
    return this.http.post(this.URL , user);
  }
}
