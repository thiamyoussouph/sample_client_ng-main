import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  getUsers(): Observable<any> {
    return this.http.get<User>(`${environment.hostApi}/saveuser`)
  }
}
