import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";

import {Vehicule} from "../_models/vehicule";
import {typesPannes} from "../_models/typesPannesModel";

@Injectable({
  providedIn: 'root'
})
export class PannesService {

  constructor(private http:HttpClient) { }
  public getpannes():Observable<Array<typesPannes>>{
    return this.http.get<Array<typesPannes>>(`${environment.hostApi}/Pannes`)
  }
  public savepann(panne:typesPannes):Observable<typesPannes>{
   return  this.http.post<typesPannes>(`${environment.hostApi}/savepanne`,panne)
  }
  public deletepanne(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerPannes/`+id)

  }
}
