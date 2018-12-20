import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class LoginService {
   url="http://localhost:8899/api/";
  constructor(private _http:HttpClient) { }
  adminLogin(data)
  {
    return this._http.post(this.url+'adminLogin',data)
  }
}
