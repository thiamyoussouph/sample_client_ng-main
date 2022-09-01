import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Kilometrage} from "../_models/Kilometrage";

@Injectable({
  providedIn: 'root'
})
export class KilometrageService {

  constructor( private http:HttpClient) { }
  public getkilometrage(): Observable<any> {
    return this.http.get<Kilometrage>(`${environment.hostApi}/killometrages`)
  }
  public savekilometrage(kilometrage:Kilometrage):Observable<Kilometrage>{
    return this.http.post<Kilometrage>(`${environment.hostApi}/ajoutkilometrage`,kilometrage)
  }
  public updatekilometrage(kilometrage){
    return this.http.put(`${environment.hostApi}/kilometrage`,kilometrage)
  }
  public deletekilometrage(kilometrage){
    return this.http.delete(`${environment.hostApi}/kilometrage/${kilometrage.id}`)
  }

}
