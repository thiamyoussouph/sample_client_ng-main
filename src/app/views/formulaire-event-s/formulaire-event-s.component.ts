import { Component, OnInit } from '@angular/core';
import {Events} from "../../_models/Event";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {VehiculeService} from "../../_services/vehiculeService";
import {Vehicule} from "../../_models/vehicule";

@Component({
  selector: 'app-formulaire-event-s',
  templateUrl: './formulaire-event-s.component.html',
  styleUrls: ['./formulaire-event-s.component.css']
})
export class FormulaireEventSComponent implements OnInit {
  public event:Events=new Events();
  formulaire: FormGroup;
  vehicule:Observable<Array<Vehicule>>
  private errorMessage: any;


  constructor(private fb:FormBuilder,private vehiculeservie:VehiculeService) { }

  ngOnInit(): void {
    this.getvehicule()
    this.formulaire=this.fb.group({
      description:"",
      datedebut: "",
      lieu: "",
      vehicules: "",
      libelle:"",
      fin: "",

      job: false,
      incident: false,
    })

  }

  public SaveEvents() {
    console.log(this.formulaire);
    console.log('Saved: ' + JSON.stringify(this.formulaire.value));
    console.log("success")

  }

  getvehicule(){
    this.vehicule=this.vehiculeservie.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
}
