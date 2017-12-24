import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  url = 'http://localhost:3000';
  constructor(private http: Http) { }

  login(data) {
    return this.http.post(`${this.url}/users/login/`, {username: data.username, password: data.password} )
      .map((res: Response) => {
        // login successful if there's a jwt token in the response
        // let user = response;
        if (res) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        //
        return res;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
