import { Component, OnInit } from '@angular/core';
import {AffectionService} from "../../_services/affection.service";
import {Affectation} from "../../_models/affectation";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-list-affectation',
  templateUrl: './list-affectation.component.html',
  styleUrls: ['./list-affectation.component.css']
})
export class ListAffectationComponent implements OnInit {
affectation!:Observable<Array<Affectation>>
  private errorMessage: any;
  constructor(private affectationservice:AffectionService) { }

  ngOnInit(): void {
this.getallvehicules()
    console.log(this.affectation)
  }

  getallvehicules(){
    this.affectation=this.affectationservice.getaffection().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );

  }
}
