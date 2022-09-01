import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {User} from "../_models/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }


public getCurrentUser(){
    return this.http.get(`${environment.hostApi}/current-user`)

}

  public generateToken(loginData:any){
    return this.http.post(`${environment.hostApi}/generer-token`,loginData)
  }
  //login user set token in local storage
  public loginUser(token){
    localStorage.setItem('token',token);
      return true;
  }
  //check if user is logged in
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined ||tokenStr== '' ||tokenStr==null){
      return false;
    }else {
      return true;
    }

  }
  //logout user remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
      return true;
  }
  //get token from local storage
  public gettokens(){
    let tokenStr = localStorage.getItem('token');
    return tokenStr;
  }
  //set user in local storage
  public setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }
  //get user from local storage
  public getUser(){
    let userstr = localStorage.getItem('user');
    if ( userstr!=null){
    return JSON.parse(userstr);
  }else {
      this.logout();
      return null;
    }

  }
  //get user role
  public getUserRole(){
    let user = this.getUser();
return user.authorities[0].authority;

  }}
