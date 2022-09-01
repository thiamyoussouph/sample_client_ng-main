import { Component, OnInit } from '@angular/core';
import {TypesJobmaintenacesServiceService} from "../../_services/types-jobmaintenaces-service.service";
import {catchError, Observable, throwError} from "rxjs";
import {TypesJopeMAIntenaces} from "../../_models/TypesJopeMAIntenaces";

@Component({
  selector: 'app-listetypmaintenaces',
  templateUrl: './listetypmaintenaces.component.html',
  styleUrls: ['./listetypmaintenaces.component.css']
})
export class ListetypmaintenacesComponent implements OnInit {
 typesjopmaintenances:Observable<Array<TypesJopeMAIntenaces>>;
  private errorMessage: any;
  constructor(private Typesmaintenacesservice:TypesJobmaintenacesServiceService) { }

  ngOnInit(): void {
    this.getTypesmaintenances();
  }
  getTypesmaintenances(){
   this.typesjopmaintenances=this.Typesmaintenacesservice.getTypesJopeMAIntenaces().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
}}
