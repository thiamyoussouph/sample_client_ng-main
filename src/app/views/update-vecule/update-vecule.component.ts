import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Marquevehicule} from "../../_models/marquevehicule";
import {ModeleVehicule} from "../../_models/modeleVehicule";
import {MarqueServiceService} from "../../_services/marque-service.service";
import {VehiculeService} from "../../_services/vehiculeService";
import {ModeleService} from "../../_services/modele.service";
import {ActivatedRoute} from "@angular/router";
import {Typesvoiture} from "../../_models/Typesvoiture";
import {TypesvehiculeServiceService} from "../../_services/typesvehicule-service.service";

@Component({
  selector: 'app-update-vecule',
  templateUrl: './update-vecule.component.html',
  styleUrls: ['./update-vecule.component.css']
})
export class UpdateVeculeComponent implements OnInit {

  recupermarque!:Array<Marquevehicule>;
  modeles!:Array<ModeleVehicule>
  recupermodele!:Array<ModeleVehicule>
  formulaire!: FormGroup
  recuperrertypes!:Array<Typesvoiture>

  recup:any;


  constructor(private marqueServiceService:MarqueServiceService, private form:FormBuilder,private  Vehiculeservice:VehiculeService,private modeleService :ModeleService,private  route:ActivatedRoute, private typesvehiculeService:TypesvehiculeServiceService) {
    this.recup= this.route.snapshot.params['id'];
    console.log(this.recup)
  }

  ngOnInit(): void {
    this.getModele()
    //this.getMarqueForme()
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
      id:this.form.control(null,[Validators.required]),
      marque:this.form.control(null,[Validators.required]),
      typesvehicule:this.form.control(null,[Validators.required]),
      numerochassie:this.form.control(null,[Validators.required]),
      typesCarburant:this.form.control(null,[Validators.required]),
    })
    this.getvehicule(this.recup)
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

  update() {

    this.Vehiculeservice.update(this.recup,this.formulaire.value).subscribe(
      data => {
        this.formulaire.setValue(data)
      }
    )
    console.log(this.formulaire)

  }

  getvehicule(id:number){
    this.Vehiculeservice.editevehicule(id).subscribe(value => {
      this.formulaire.patchValue(value);
    })
  }
}
