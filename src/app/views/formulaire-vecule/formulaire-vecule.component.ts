import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Marquevehicule} from "../../_models/marquevehicule";
import {ModeleVehicule} from "../../_models/modeleVehicule";
import {Typesvoiture} from "../../_models/Typesvoiture";
import {MarqueServiceService} from "../../_services/marque-service.service";
import {VehiculeService} from "../../_services/vehiculeService";
import {ModeleService} from "../../_services/modele.service";
import {TypesvehiculeServiceService} from "../../_services/typesvehicule-service.service";
import {Vehicule} from "../../_models/vehicule";

@Component({
  selector: 'app-formulaire-vecule',
  templateUrl: './formulaire-vecule.component.html',
  styleUrls: ['./formulaire-vecule.component.css']
})
export class FormulaireVeculeComponent implements OnInit {

  recupermarque!:Array<Marquevehicule>;
  modeles!:Array<ModeleVehicule>
  recupermodele!:Array<ModeleVehicule>
  formulaire!: FormGroup
  recuperrertypes!:Array<Typesvoiture>
  constructor(private marqueServiceService:MarqueServiceService, private form:FormBuilder,private  Vehiculeservice:VehiculeService,private modeleService :ModeleService,private typesvehiculeService:TypesvehiculeServiceService ) { }

  ngOnInit(): void {
    this.getModele()
    this.getMarqueForme()
    this.loadtypes()
    this.formulaire = this.form.group({
      matricule :this.form.control(null,[Validators.required,Validators.minLength(6)]),
      nombrePlace :this.form.control(null,[Validators.required,Validators.minLength(6)]),
      modele :this.form.control(null,[Validators.required]),
      status :this.form.control(null,[Validators.required]),
      dateAchat:this.form.control(null,[Validators.required]),
      dateSOrtie:this.form.control(null,[Validators.required]),
      dateMisEnMarche:this.form.control(null,[Validators.required]),
      etats:this.form.control(null,[Validators.required]),
      marque:this.form.control(null,[Validators.required]),
      typesvehicule:this.form.control(null,[Validators.required]),
      numerochassie:this.form.control(null,[Validators.required]),
      typesCarburant:this.form.control(null,[Validators.required]),
    })
  }
  public getModele(){
    this.modeleService.getModele().subscribe({
      next:(data)=>{
        this.recupermodele=data;
        console.log(this.recupermarque)
      }
    })
  }
  public getMarqueForme(){
    this.marqueServiceService.getMarque().subscribe({
      next:(data)=>{
        this.recupermarque=data;
        console.log(this.recupermarque)
      }
    })
  }

  public loadModele() {
    let id:number = this.formulaire.value.marque
    this.marqueServiceService.getMarqueById(id).subscribe({
      next:(data)=>{
        this.modeles=data.modeles
      }
    })
  }
  loadtypes(){
    this.typesvehiculeService.getTypeheicule().subscribe({
      next:(data)=>{
        this.recuperrertypes=data
      }
    })
  }

  SaveVehicule() {

    this.Vehiculeservice.savevehicules(this.formulaire.value).subscribe({
      next:data=>{
        alert("enregistrer")
      },error:err=>{
        alert("erreur");
      }

    })
    this.formulaire.reset()

  }
  update(){
    let vehicule:Vehicule=this.formulaire.value;
    this.Vehiculeservice.savevehicules(this.formulaire.value).subscribe({
      next:data=>{
        alert("enregistrer")
      },error:err=>{
        alert("erreur");
      }

    })
  }

}
