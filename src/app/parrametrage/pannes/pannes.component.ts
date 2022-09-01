import { Component, OnInit } from '@angular/core';
import {PannesService} from "../../_services/pannes.service";
import {catchError, Observable, throwError} from "rxjs";

import {Pannes} from "../../_models/pannesModel";

@Component({
  selector: 'app-pannes',
  templateUrl: './pannes.component.html',
  styleUrls: ['./pannes.component.css']
})
export class PannesComponent implements OnInit {
  pannes:Pannes[];
  productDialog: boolean;



  panne: {};

  selectedProducts: Pannes[];

  submitted: boolean;

  statuses: any[];
  Delete: any;




  constructor(private panneservice:PannesService) { }

  ngOnInit(): void {
   this.getallpanne()
    console.log(this.panne)
    this.statuses = [
      {label: 'INSTOCK', value: 'instock'},
      {label: 'LOWSTOCK', value: 'lowstock'},
      {label: 'OUTOFSTOCK', value: 'outofstock'}
    ];
  }
  getallpanne(){
    this.panneservice.getpannes().subscribe(data=>{
      this.pannes=data;
      console.log(this.panne)
    })
    ;

  }
  openNew() {
    this.panne = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
  }

  editProduct(product: Pannes) {
    this.panne = {...product};
    this.productDialog = true;
  }

  deleteProduct(product:Pannes) {
;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;


  }

  findIndexById(id: string) {

  }





  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

}
