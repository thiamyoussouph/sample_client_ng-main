import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from "chart.js";
import {VehiculeService} from "../../_services/vehiculeService";


@Component({
  selector: 'app-vehiculedashbord',
  templateUrl: './vehiculedashbord.component.html',
  styleUrls: ['./vehiculedashbord.component.css']
})
export class VehiculedashbordComponent implements OnInit {
 chart:any
 valeurgasoile:any
  vehiculeESSance:any
  vehiculeélectrique:any
  constructor( private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
   this.vehiculeService.getVehicules().subscribe({
     next:(data)=>{
this.valeurgasoile=data.filter(value=>value.typesCarburant==="gasoil").length
       this.vehiculeESSance=data.filter(value=>value.typesCarburant==="essence").length
       this.vehiculeélectrique=data.filter(value=>value.typesCarburant==="électrique").length
       new Chart(this.chart,{
         type:'pie',
         data:{
           labels: ['essence','gazoile',],
           datasets:[{
             data:[this.valeurgasoile,this.vehiculeESSance,this.vehiculeélectrique],
             backgroundColor: [
               'rgb(9,68,4)',
               'rgb(227,126,10)',
               'rgb(241,7,27)'
             ]

           }]
         }
       })
     }
   })
   this.chart=document.getElementById("moncharte")

    Chart.register(...registerables);
 this.loardChard()
  }
  loardChard():void{


  }
}
