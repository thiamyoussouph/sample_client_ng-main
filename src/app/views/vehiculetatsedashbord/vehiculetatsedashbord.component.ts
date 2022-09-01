import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from "chart.js";
import {VehiculeService} from "../../_services/vehiculeService";

@Component({
  selector: 'app-vehiculetatsedashbord',
  templateUrl: './vehiculetatsedashbord.component.html',
  styleUrls: ['./vehiculetatsedashbord.component.css']
})
export class VehiculetatsedashbordComponent implements OnInit {
  vehiculeenmarches:any
  vehiculepasenmarche:any
  charts:any

  constructor(private vehiculeService:VehiculeService) {

  }

  ngOnInit(): void {
   this.vehiculenmarche()
   this.vehiculepasenmarche
    this.charts=document.getElementById("char")
    Chart.register(...registerables);
    this.vehiculeService.vehiculeenmarche().subscribe({
      next:(data)=>{
        this.vehiculeenmarches=data


      }
    })
    this.vehiculepasmarche()
    this.vehiculeService.vehiculpasEnmarche().subscribe({
      next:(data)=>{
        this.vehiculepasenmarche=data
        console.log(this.vehiculepasenmarche)
        this.loardChard()
      }
    })


  }
  loardChard():void{

    new Chart(this.charts,{
      type:'pie',
      data:{
        labels: ['panne','vehicule en marche'],
        datasets:[{
          data:[this.vehiculeenmarches,this.vehiculepasenmarche],
          backgroundColor: [
            'rgb(241,7,27)',
              'rgb(86,255,140)',
          ]

        }]
      }
    })
  }
vehiculenmarche(){
  this.vehiculeService.vehiculeenmarche().subscribe({
    next:(data)=>{
 this.vehiculeenmarches=data
 }
  })
}
  vehiculepasmarche(){
    this.vehiculeService.vehiculpasEnmarche().subscribe({
      next:(data)=>{
        this.vehiculepasenmarche=data
      }
    })
  }

}
