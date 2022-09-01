import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TypesJopeMAIntenaces} from "../_models/TypesJopeMAIntenaces";

@Injectable({
  providedIn: 'root'
})
export class TypesJobmaintenacesServiceService {

  constructor(private http:HttpClient) { }
  public getTypesJopeMAIntenaces():Observable<any>{
    return this.http.get<TypesJopeMAIntenaces>(`${environment.hostApi}/typesmaintenances`)
  }
  public saveTypesJopeMAIntenaces(typesJopeMAIntenaces:TypesJopeMAIntenaces):Observable<TypesJopeMAIntenaces>{
    return this.http.post<TypesJopeMAIntenaces>(`${environment.hostApi}/savetypesmaintenances`,typesJopeMAIntenaces)
  }
  public deleteTypesJopeMAIntenaces(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerTypesmainenaces/`+id)

  }
  editTypesJopeMAIntenaces(id: number):Observable<TypesJopeMAIntenaces> {
    return this.http.get<TypesJopeMAIntenaces>(`${environment.hostApi}/typesmaintenances/`+id)
  }
  updateTypesJopeMAIntenaces(id: number, typesJopeMAIntenaces:TypesJopeMAIntenaces){
    return this.http.put(`${environment.hostApi}/updateTypesmaintenances/`+id,typesJopeMAIntenaces)
  }


}
