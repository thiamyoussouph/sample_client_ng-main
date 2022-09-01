import { Component, OnInit } from '@angular/core';
import {Kilometrage} from "../../_models/Kilometrage";
import {KilometrageService} from "../../_services/kilometrage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-kilometrage',
  templateUrl: './kilometrage.component.html',
  styleUrls: ['./kilometrage.component.css']
})
export class KilometrageComponent implements OnInit {
 kilometrage:Kilometrage[];
  constructor(private kilometrageservice:KilometrageService) { }


  ngOnInit(): void {
    this.kiletrage()
  }
kiletrage(){
  this.kilometrageservice.getkilometrage().subscribe(data=>{
    this.kilometrage=data;
    console.log(this.kilometrage)
  })
}
}

