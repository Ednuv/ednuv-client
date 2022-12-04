import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //baseUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/api/Account/login`,loginData)
  }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  public loginUser(token){
    localStorage.setItem('token', token.token);
    return true;
  }
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr =='' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
      console.log(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
