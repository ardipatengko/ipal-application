import { Injectable } from '@angular/core';
import { Utils } from './../utils/util-module';
import { Http, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IpalCategoryService {

  constructor(
    private http: Http,
    private httpNew: HttpClient
  ) { }

  getIpalCategory(): Observable<any>{
    return this.httpNew.get(Utils.getConnectionUrl().concat("ipalCategory"));
  }
}
