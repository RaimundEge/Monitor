import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TransService {
 
  private transUrl = '//blitz.cs.niu.edu/';  // URL to web api

  constructor(private http: HttpClient) { }

  getTrans(restURL: string) {
    return this.http.get(this.transUrl + restURL);
  }

  prepare(c: any): void {
    c.date = new Date(c.timeStamp).toLocaleString();
    delete c._id;
    delete c.timeStamp;
  }
}

