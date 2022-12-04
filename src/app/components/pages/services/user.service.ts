import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

// baseUrl = "http://localhost:8080";
  constructor(
    private http: HttpClient
  ) { }

  public addUser(user: any){
     return this.http.post(`${baseUrl}/api/Account/register/`,user);
  }
}
