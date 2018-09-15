import { Injectable } from '@angular/core';
import { Utils } from './../utils/util-module';
import { Http, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IpalCategoryService {

  constructor(
    private http: Http
  ) { }

  getIpalCategory(): Observable<any>{
    return this.http.get(Utils.getConnectionUrl().concat("ipalCategory"));
  }
}
