import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Events} from "../_models/Event";
import {EventPanne} from "../_models/eventPanne";
import {EventAccident} from "../_models/EventAccident";
import {EventJobmaintenace} from "../_models/EventJobmaintenace";




@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor( private http:HttpClient) { }
  getEvent(): Observable<any> {
    return this.http.get<Events>(`${environment.hostApi}/events`)
  }
  public savevePanne(events:Events):Observable<Events>{
    return this.http.post<Events>(`${environment.hostApi}/savepane`,events)
}
  public saveveJob(events:Events):Observable<Events>{
    return this.http.post<Events>(`${environment.hostApi}/savejob`,events)
  }
  public saveaccident(events:Events):Observable<Events>{
    return this.http.post<Events>(`${environment.hostApi}/saveaccident`,events)
  }
  public getEventPanne():Observable<any>{
    return this.http.get<EventPanne>(`${environment.hostApi}/getPan`)
  }
  public getEventaccident():Observable<any>{
    return this.http.get<EventAccident >(`${environment.hostApi}/getaccidents`)
  }
  public getEventJobs():Observable<any>{
    return this.http.get<EventJobmaintenace>(`${environment.hostApi}/getjobs`)
  }
  public deletepanne(id:number){
    return this.http.delete(`${environment.hostApi}/deletepanne/`+id)

  }
  public deleAcccident(id:number){
    return this.http.delete(`${environment.hostApi}/deleteaccident/`+id)

  }
  public delejobmaintenance(id:number){
    return this.http.delete(`${environment.hostApi}/deletejob/`+id)

  }
  editepanne(id: number):Observable<EventPanne> {
    return this.http.get<EventPanne>(`${environment.hostApi}/editerpanne/`+id)
  }


}
