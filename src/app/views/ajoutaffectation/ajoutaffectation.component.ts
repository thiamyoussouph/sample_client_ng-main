import { Component, OnInit } from '@angular/core';
import {Affectation} from "../../_models/affectation";
import {catchError, Observable, throwError} from "rxjs";
import {AffectionService} from "../../_services/affection.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChauffeurService} from "../../_services/chauffeur.service";
import {Chauffeur} from "../../_models/Chauffeur";
import {VehiculeService} from "../../_services/vehiculeService";
import {Vehicule} from "../../_models/vehicule";

@Component({
  selector: 'app-ajoutaffectation',
  templateUrl: './ajoutaffectation.component.html',
  styleUrls: ['./ajoutaffectation.component.css']
})
export class AjoutaffectationComponent implements OnInit {
  chauffeur!:Observable<Array<Chauffeur>>
  Vehicule!:Observable<Array<Vehicule>>
  formulaires!: FormGroup
  private errorMessage: any;
  constructor(  private form:FormBuilder, private affectationservice:AffectionService,private chauffeurservice:ChauffeurService,private vehiculeservice:VehiculeService) { }

  ngOnInit(): void {
    this.loadchauffeur()
   this.loadVehicule()
    this.formulaires = this.form.group({
      chauffeur:this.form.control(null,[Validators.required,Validators.minLength(6)]),
      dateDebut :this.form.control(null,[Validators.required,Validators.minLength(6)]),
      vehicules :this.form.control(null,[Validators.required]),
      dateFin:this.form.control(null,[Validators.required]),

    })
    console.log(this.formulaires)

  }
saveaffectation(){
  this.affectationservice.saveaffection(this.formulaires.value).subscribe({
    next:data=>{
      alert("enregistrer")
    },error:err=>{
      alert("erreur");
    }

  })
  this.formulaires.reset()

}
loadchauffeur(){

  this.chauffeur=this.chauffeurservice.getchauffeur().pipe(
    catchError(err => {
      this.errorMessage=err.message;
      return throwError(err)
    })
  );




}
loadVehicule(){
  this.Vehicule=this.vehiculeservice.getVehicules().pipe(
    catchError(err => {
      this.errorMessage=err.message;
      return throwError(err)
    })
  );
}
}



