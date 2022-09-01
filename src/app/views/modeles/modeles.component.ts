import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ModeleVehicule} from "../../_models/modeleVehicule";
import {VehiculeService} from "../../_services/vehiculeService";

@Component({
  selector: 'app-modeles',
  templateUrl: './modeles.component.html',
  styleUrls: ['./modeles.component.css']
})
export class ModelesComponent implements OnInit {
  Modele!:Observable<Array<ModeleVehicule>>;
  constructor(private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
    this.Modele=this.vehiculeService.getVehicules()
  }

}
