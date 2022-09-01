import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/_models/vehicule';
import { VehiculeService } from 'src/app/_services/vehiculeService';
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {
  Vehicule !:Observable<Array<Vehicule>>;
  errorMessage!:string;
  constructor(private service: VehiculeService,private router:Router) { }

  ngOnInit(): void {;

    this.getallvehicules()

  }
  getallvehicules(){
    this.Vehicule=this.service.getVehicules().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );

  }
  delecteVehicules(v: Vehicule) {
    this.service.deletevehicule(v.id).subscribe({
      next:(rep)=>{
        this.getallvehicules()
      },error:err=>{
        alert("erreur");
      }
    })
  }
  editeVehicules(v: Vehicule) {
    this.service.editevehicule(v.id).subscribe({
      next:(rep)=>{

      },error:err=>{
        alert("erreur");
      }
    })
  }
  updateEnployer(id:number){
    this.router.navigate(["updateEployer",id])
  }



}
