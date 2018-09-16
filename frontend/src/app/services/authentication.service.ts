import { Injectable } from '@angular/core';
import { Utils } from './../utils/util-module';
import { Http, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: Http
  ) { }

  authenticate(username, password){
    return this.http.get(Utils.getConnectionUrl().concat("authenticate"), {
      params: {
        username: username,
        password: password
      }
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
