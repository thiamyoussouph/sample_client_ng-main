import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Marquevehicule} from "../../_models/marquevehicule";
import {MarqueServiceService} from "../../_services/marque-service.service";

@Component({
  selector: 'app-marquees',
  templateUrl: './marquees.component.html',
  styleUrls: ['./marquees.component.css']
})
export class MarqueesComponent implements OnInit {
  Marque!:Observable<Array<Marquevehicule>>;
  constructor(private   marqueServiceService: MarqueServiceService) { }

  ngOnInit(): void {
    this.Marque=this.marqueServiceService.getMarque();
  }

}
