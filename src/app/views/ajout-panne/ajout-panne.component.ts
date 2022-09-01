import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Vehicule} from "../../_models/vehicule";
import {VehiculeService} from "../../_services/vehiculeService";
import {Pannes} from "../../_models/pannesModel";
import {PannesService} from "../../_services/pannes.service";
import {PannesVehiculeService} from "../../_services/pannes-vehicule.service";

@Component({
  selector: 'app-ajout-panne',
  templateUrl: './ajout-panne.component.html',
  styleUrls: ['./ajout-panne.component.css']
})
export class AjoutPanneComponent implements OnInit {
  Vehicul!:Observable<Array<Vehicule>>;
  formulairePanne!: FormGroup
  panne!:Observable<Array<Pannes>>;
  private errorMessage: any;

  constructor(private form:FormBuilder,private service: VehiculeService,private panneservice:PannesService,private  pannesVehiculeService:PannesVehiculeService) { }

  ngOnInit(): void {
    this.loadPanne()

    this.loadVehicule()
    this.formulairePanne = this.form.group({
      pannes :this.form.control(null,[Validators.required]),
      vehicules :this.form.control(null,[Validators.required]),
      lieux :this.form.control(null,[Validators.required]),
      description :this.form.control(null,[Validators.required]),
      niveau :this.form.control(null,[Validators.required]),
      date:this.form.control(null,[Validators.required]),
    })
  }

  loadVehicule(){
    this.Vehicul=this.service.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
  loadPanne(){
    this.panne=this.panneservice.getpannes().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
  savepanne(){
    this.pannesVehiculeService.savepannesvehicule(this.formulairePanne.value).subscribe({
      next:data=>{
        alert("enregistrer")
      },error:err=>{
        alert("erreur");
      }

    })
    this.formulairePanne.reset()

  }
}
