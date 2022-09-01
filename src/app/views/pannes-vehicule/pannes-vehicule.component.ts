import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PannesVehiculeService} from "../../_services/pannes-vehicule.service";
import {catchError, Observable, throwError} from "rxjs";
import {PannesVehicule} from "../../_models/PannesVehicule";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pannes-vehicule',
  templateUrl: './pannes-vehicule.component.html',
  styleUrls: ['./pannes-vehicule.component.css']
})
export class PannesVehiculeComponent implements OnInit {
 pannes!:Observable<Array<PannesVehicule>>
  id:number;
 p:PannesVehicule;
  private errorMessage: any;
  @ViewChild('couleur') couleur: ElementRef;
  constructor( private pannevehiculeservice:PannesVehiculeService,private route:ActivatedRoute,private  router:Router) { }

  ngOnInit(): void {
    this.getallpannevehicules()
    console.log(this.pannes)
    this.id= this.route.snapshot.params['id'];
    this.resolutionpanne(this.id,this.p)

    console.log(this.couleur)
  }
  getallpannevehicules(){
    this.pannes=this.pannevehiculeservice.getpannesvehicule().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err)
      })
    );
  }
  public resolutionpanne(id: number ,pa:PannesVehicule){

 this.pannevehiculeservice.getpannesvehiculebyid(id,pa).subscribe(
    next=>{
      this.router.navigate(["/pannesresolu"])
      console.log(pa)
    } )


  }

}
