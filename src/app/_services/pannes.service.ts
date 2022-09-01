import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {Pannes} from "../_models/pannesModel";
import {Vehicule} from "../_models/vehicule";

@Injectable({
  providedIn: 'root'
})
export class PannesService {

  constructor(private http:HttpClient) { }
  public getpannes():Observable<Array<Pannes>>{
    return this.http.get<Array<Pannes>>(`${environment.hostApi}/Pannes`)
  }
  public savepann(panne:Pannes):Observable<Pannes>{
   return  this.http.post<Pannes>(`${environment.hostApi}/savepanne`,panne)
  }
  public deletepanne(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerPannes/`+id)

  }
}
