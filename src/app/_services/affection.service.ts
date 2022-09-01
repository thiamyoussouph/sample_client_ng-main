import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Affectation} from "../_models/affectation";
import {Observable} from "rxjs";
import {Vehicule} from "../_models/vehicule";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AffectionService {

  constructor(private http:HttpClient) { }
  getaffection():Observable<any>{
    return this.http.get<Affectation>(`${environment.hostApi}/affectations`)
  }
  getaffectionbyid(id:number){
    return this.http.get(`${environment.hostApi}/detaiAffectation/`+id)
  }

  saveaffection(affection:Affectation):Observable<Affectation>{
    return this.http.post<Affectation>(`${environment.hostApi}/saveAffectation`,affection)
  }
updateaffection(id:number,affection:Affectation){
    return this.http.put(`${environment.hostApi}/updateAffectation/`+id,affection)
  }
  deleteaffection(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerAffectation/`+id)
  }

}

