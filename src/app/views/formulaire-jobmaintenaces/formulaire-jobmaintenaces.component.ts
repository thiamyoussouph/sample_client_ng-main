import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {VehiculeService} from "../../_services/vehiculeService";
import {JonbDeMaintenacesService} from "../../_services/jonb-de-maintenaces.service";
import {Vehicule} from "../../_models/vehicule";
import {TypesJobmaintenacesServiceService} from "../../_services/types-jobmaintenaces-service.service";
import {TypesJopeMAIntenaces} from "../../_models/TypesJopeMAIntenaces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire-jobmaintenaces',
  templateUrl: './formulaire-jobmaintenaces.component.html',
  styleUrls: ['./formulaire-jobmaintenaces.component.css']
})
export class FormulaireJobmaintenacesComponent implements OnInit {
   Vehicule!: Observable<Array<Vehicule>>;
  typesJop!: Observable<Array<TypesJopeMAIntenaces>>;
  private errorMessage: any;
formulaires!:FormGroup;



  constructor(private vehiculeservice:VehiculeService,private jobmaintenaceservice:JonbDeMaintenacesService,private typesJobmaintenacesServiceService:TypesJobmaintenacesServiceService,private form:FormBuilder) { }

  ngOnInit(): void {
    this.loadVehicule();
    this.loadTypeJob();

   this.formulaires = this.form.group({
      vehicules :this.form.control(null,[Validators.required]),
      typesJop :this.form.control(null,[Validators.required]),
     dateDebut :this.form.control(null,[Validators.required,Validators.minLength(6)]),
     dateResolution:this.form.control(null,[Validators.required]),
     description:this.form.control(null,[Validators.required]),
     lieux:this.form.control(null,[Validators.required]),
     typesJobDeMaintenance:this.form.control(null,[Validators.required]),
   })
  }
  loadTypeJob(){
   this.typesJop=this.typesJobmaintenacesServiceService.getTypesJopeMAIntenaces().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)

      })  );
      }

  loadVehicule(){
    this.Vehicule=this.vehiculeservice.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
  saveJob(){
    this.jobmaintenaceservice.saveJonbDeMaintenace(this.formulaires.value).subscribe({
      next:data=>{
        alert("enregistrer")
      }
    })
    this.formulaires.reset()
  }

}
