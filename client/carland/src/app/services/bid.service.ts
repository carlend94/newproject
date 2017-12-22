import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BidService {
  url = 'http://localhost:3000';


  constructor(private router: Router, private http: HttpClient) {
  }

  postBid(): Observable<any> {
    const body = new HttpParams()
      .set('auto', 'lala')
      .set('phone', 'sasa');

    return this.http.post(`${this.url}/bids/bid/`,  body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .map((res: Response) => {
        return res;
      });
  }


}

