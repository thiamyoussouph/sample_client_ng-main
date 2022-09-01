import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {JobDeMaintenace} from "../_models/JobDeMaintenace";

@Injectable({
  providedIn: 'root'
})
export class JonbDeMaintenacesService {

  constructor(private http:HttpClient) { }
  public getJonbDeMaintenaces():Observable<any>{
    return this.http.get<JobDeMaintenace>(`${environment.hostApi}/jobDeMaintenances`)
  }
  public saveJonbDeMaintenace(jonbDeMaintenace:JobDeMaintenace):Observable<JobDeMaintenace>{
    return this.http.post<JobDeMaintenace>(`${environment.hostApi}/savejobmaintenance`,jonbDeMaintenace)
  }
  public deleteJonbDeMaintenace(id:number){
    return this.http.delete(`${environment.hostApi}/suprimerjobmaintenance/`+id)

  }
  editJonbDeMaintenace(id: number):Observable<JobDeMaintenace> {
    return this.http.get<JobDeMaintenace>(`${environment.hostApi}/editerjobmaintenance/`+id)
  }
  updateJonbDeMaintenace(id: number, jonbDeMaintenace:JobDeMaintenace){
    return this.http.put(`${environment.hostApi}/updatejobmaintenance/`+id,jonbDeMaintenace)
  }
}
