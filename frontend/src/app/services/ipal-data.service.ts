import { Injectable } from '@angular/core';
import { Utils } from './../utils/util-module';
import { Http, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IpalDataService {

  constructor(
    private http: Http,
    private httpNew: HttpClient
  ) { }

  getIpalData(): Observable<any>{
    return this.httpNew.get(Utils.getConnectionUrl().concat("ipalData"));
  }

  getIpalDataById(idIpalData): Observable<any>{
    return this.httpNew.get(Utils.getConnectionUrl().concat("ipalData/".concat(idIpalData)));
  }

  getIpaldataByCategoryId(idCategory): Observable<any>{
    return this.httpNew.get(Utils.getConnectionUrl().concat("ipalData/category/").concat(idCategory));
  }

  insertIpalData(ipalData): Observable<any>{
    let body = JSON.stringify(ipalData);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post(Utils.getConnectionUrl().concat("ipalData"), body, options);
    return this.httpNew.post(Utils.getConnectionUrl().concat("ipalData"), body, httpOptions);
  }

  deleteIpalData(idIpaldata): Observable<any>{
    // return this.http.delete(Utils.getConnectionUrl().concat("ipalData/").concat(idIpaldata));
    return this.httpNew.delete(Utils.getConnectionUrl().concat("ipalData/").concat(idIpaldata), httpOptions);
  }
}
