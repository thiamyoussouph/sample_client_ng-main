import { Component, OnInit } from '@angular/core';
import {VehiculeService} from "../../_services/vehiculeService";
import {KilometrageService} from "../../_services/kilometrage.service";
import {catchError, Observable, throwError} from "rxjs";
import {Vehicule} from "../../_models/vehicule";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire-kilometrage',
  templateUrl: './formulaire-kilometrage.component.html',
  styleUrls: ['./formulaire-kilometrage.component.css']
})
export class FormulaireKilometrageComponent implements OnInit {
vehicule:Observable<Array<Vehicule>>
  formureirekilometrage:FormGroup
  private errorMessage: any;

  constructor( private form:FormBuilder,private vehiculeservie:VehiculeService,private kilometrageservice:KilometrageService) { }

  ngOnInit(): void {

    this.getvehicule()
    this.formureirekilometrage= this.form.group({
      kilometrage :this.form.control(null,[Validators.required]),
      vehicules :this.form.control(null,[Validators.required]),

      dateEnregistrement:this.form.control(null,[Validators.required]),
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
savekilometrage(){  this.kilometrageservice.savekilometrage(this.formureirekilometrage.value).subscribe({
  next:data=>{
    alert("enregistrer")
  }
})
this.formureirekilometrage.reset()

}}
