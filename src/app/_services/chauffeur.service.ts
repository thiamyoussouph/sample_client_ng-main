  import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Chauffeur} from "../_models/Chauffeur";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http:HttpClient) { }
  getchauffeur():Observable<Array<Chauffeur>>{
    return this.http.get<Array<Chauffeur>>(`${environment.hostApi}/chauffeurs`)
  }
  getchauffeurbyid(id:number){
    return this.http.get(`${environment.hostApi}/detaiChauffeur/`+id)
  }
  savechauffeur(chauffeur:Chauffeur){
    return this.http.post(`${environment.hostApi}/saveChauffeur`,chauffeur)
  }
  updatechauffeur(id:number,chauffeur:Chauffeur){
    return this.http.put(`${environment.hostApi}/updateChauffeur/`+id,chauffeur)
  }
  deletechauffeur(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerChauffeur/`+id)
  }
}

