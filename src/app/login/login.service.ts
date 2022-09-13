import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:8181";
  constructor(private http : HttpClient) { }

  users(){
    return this.http.get(this.baseUrl+"/getAllUsers");
  }
}
