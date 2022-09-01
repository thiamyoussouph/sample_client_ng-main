import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pannes} from "../_models/pannesModel";
import {environment} from "../../environments/environment";
import {PannesVehicule} from "../_models/PannesVehicule";
import {Vehicule} from "../_models/vehicule";

@Injectable({
  providedIn: 'root'
})
export class PannesVehiculeService {

  constructor( private http:HttpClient) { }

  public getpannesvehicule():Observable<Array<PannesVehicule>>{
    return this.http.get<Array<PannesVehicule>>(`${environment.hostApi}/panneenregistrer`)
  }
  public savepannesvehicule(Pannesvehicule:PannesVehicule):Observable<PannesVehicule>{
    return this.http.post<PannesVehicule>(`${environment.hostApi}/creerpannes`,Pannesvehicule)

  }

  getpannesvehiculebyid(id: number,Pannevehicule:PannesVehicule){
    return this.http.put(`${environment.hostApi}/resolutionpanne/`+id,Pannevehicule)
  }
}
