import { Component, OnInit } from '@angular/core';
import {JonbDeMaintenacesService} from "../../_services/jonb-de-maintenaces.service";
import {catchError, Observable, throwError} from "rxjs";
import {JobDeMaintenace} from "../../_models/JobDeMaintenace";

@Component({
  selector: 'app-jobmaintenaces',
  templateUrl: './jobmaintenaces.component.html',
  styleUrls: ['./jobmaintenaces.component.css']
})
export class JobmaintenacesComponent implements OnInit {
 jobmaintenances:Observable<Array<JobDeMaintenace>>;
  private errorMessage: any;
  constructor(private jobmaintenanceservice:JonbDeMaintenacesService) { }

  ngOnInit( ): void {
   this.getjobmaintenances()
    console.log(this.jobmaintenances);
  }

  getjobmaintenances(){
   this.jobmaintenances=this.jobmaintenanceservice.getJonbDeMaintenaces().pipe(

     catchError(err => {
     this.errorMessage=err.message;
     return throwError(err)
    }))
}
}

