import { Injectable } from '@angular/core';
import { Utils } from './../utils/util-module';
import { Http, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IpalDataService {

  constructor(
    private http: Http
  ) { }

  getIpalData():Observable<any>{
    return this.http.get(Utils.getConnectionUrl().concat("ipalData"));
  }
}
