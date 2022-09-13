import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationComponent } from './user-registration.component';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  baseURL = "http://localhost:8181";
  constructor(private httpClient : HttpClient) { }

  getAllUser():Observable<UserRegistrationComponent[]>{
    return this.httpClient.get<UserRegistrationComponent[]>('${this.baseURL}');
  }

  saveUser(data:any){
    return this.httpClient.post(this.baseURL+"/addUser",data)
  }
  
}
