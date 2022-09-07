import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../_services/events.service";
import {catchError, Observable, throwError} from "rxjs";
import {Events} from "../../_models/Event";

@Component({
  selector: 'app-event-s',
  templateUrl: './event-s.component.html',
  styleUrls: ['./event-s.component.css']
})
export class EventSComponent implements OnInit {
 event!:Observable<Array<Events>>
  private errorMessage: any;
  constructor(private eventservice:EventsService) { }

  ngOnInit(): void {
    this.getEvent()
    console.log(this.event)
  }
  getEvent(){
    this.event=this.eventservice.getEvent().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );


  }

}
