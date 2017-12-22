import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {
  url = 'http://localhost:3000';


  constructor(private router: Router, private http: HttpClient) {
  }

  registerUser(data): Observable<any> {
    return this.http.post(`${this.url}/users/register/`,  data)
      .map((res: Response) => {
        return res;
      });
  }


}
