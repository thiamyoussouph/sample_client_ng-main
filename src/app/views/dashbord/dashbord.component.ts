import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Vehicule} from "../../_models/vehicule";
import {VehiculeService} from "../../_services/vehiculeService";
import {PannesVehiculeService} from "../../_services/pannes-vehicule.service";
import {PannesVehicule} from "../../_models/PannesVehicule";


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  private Vehicule: Observable<Array<Vehicule>>;
  private errorMessage: any;
  nombretotalevheicule:number
  vehiculekia:number
  vehiculeForte:number
 private pannes:Observable<Array<PannesVehicule>>;
  nombrepanneresolue:number
  vehiculpanne:number
  constructor(private service:VehiculeService,private pannevehiculeservice:PannesVehiculeService) { }

  ngOnInit(): void {
    this.service.getVehicules().subscribe({
      next:(data)=>{

        this.nombretotalevheicule=data.length
        this.vehiculekia=data.filter(value=>value.pannesVehicules.etats===false).length
        this.vehiculeForte=data.filter(value=>value.jobDeMaintenace.etat===false).length



        console.log(this.vehiculekia)


      }

    })
      this.pannevehiculeservice.getpannesvehicule().subscribe({
        next:(data)=>{
          this.nombrepanneresolue=data.filter(value=>value.etat===false).length

          console.log(this.vehiculpanne)
        }
      })
    }


  getallvehicules(){
    this.Vehicule=this.service.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );

  }

}
