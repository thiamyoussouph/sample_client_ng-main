import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Vehicule} from "../../_models/vehicule";
import {VehiculeService} from "../../_services/vehiculeService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../_services/events.service";
import {PannesService} from "../../_services/pannes.service";
import {typesPannes} from "../../_models/typesPannesModel";

@Component({
  selector: 'app-formulaireevent-panne',
  templateUrl: './formulaireevent-panne.component.html',
  styleUrls: ['./formulaireevent-panne.component.css']
})
export class FormulaireeventPanneComponent implements OnInit {
  vehicule!:Observable<Array<Vehicule>>;
  private errorMessage: any;
  pannes!:Observable<Array<typesPannes>>
  formulaires!:FormGroup;
  constructor(private vehiculeservie:VehiculeService,private form:FormBuilder,private eventsService:EventsService,
              private panneservice:PannesService) { }

  ngOnInit(): void {
    this.getvehicule()
    this.getallpanne()
    console.log(this.pannes)
    this.formulaires= this.form.group({
      lieu:this.form.control(null,[Validators.required]),
      vehicules :this.form.control(null,[Validators.required]),
      datedebut:this.form.control(null,[Validators.required]),
      impacte:this.form.control(null,[Validators.required]),
      urgence:this.form.control(null,[Validators.required]),
      cause:this.form.control(null,[Validators.required]),
      typePanne:this.form.control(null,[Validators.required]),

})
  }




  getvehicule(){
    this.vehicule=this.vehiculeservie.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
  saveeventpanne(){
    this.eventsService.savevePanne(this.formulaires.value).subscribe({
      next:data=>{
        alert("enregistrer")
      }
    })
    this.formulaires.reset()

  }
  getallpanne(){
    this.pannes=this.panneservice.getpannes().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      }
      )
    )
}

}
