import { Component, OnInit } from '@angular/core';
import {VehiculeService} from "../../_services/vehiculeService";
import {ActivatedRoute} from "@angular/router";
import {Vehicule} from "../../_models/vehicule";

@Component({
  selector: 'app-details-vecules',
  templateUrl: './details-vecules.component.html',
  styleUrls: ['./details-vecules.component.css']
})
export class DetailsVeculesComponent implements OnInit {

  id:number;
  Vehicul!:Vehicule;
  constructor(private vehiculesService :VehiculeService ,private route:ActivatedRoute, private servicevehicule:VehiculeService) {

  }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getdetail(this.id)


  }
  getdetail(id: number){
    this.servicevehicule.editevehicule(id).subscribe(
      next=>{
        this.Vehicul=next
        console.log(this.Vehicul)
      }

    )

  }

}
