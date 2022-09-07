import {Component, OnInit, ViewChild} from '@angular/core';



import {EventsService} from "../../_services/events.service";


import {catchError, Observable, throwError} from "rxjs";
import {EventPanne} from "../../_models/eventPanne";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormulaireeventPanneComponent} from "../formulaireevent-panne/formulaireevent-panne.component";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-liste-eventpanne',
  templateUrl: './liste-eventpanne.component.html',
  styleUrls: ['./liste-eventpanne.component.css']
})
export class ListeEventpanneComponent implements OnInit {

  eventPanne!:Observable<Array<EventPanne>>;


 listeData:MatTableDataSource<any>
@ViewChild(MatSort) sort:MatSort;
 @ViewChild(MatPaginator) paginator:MatPaginator

 displayedColumns: string[] = ['vehicules','typePanne', 'datedebut','lieu','impacte','urgence','cause','action'];
  searchKey: any;



  constructor(private eventsService:EventsService,private Dialog:MatDialog) { }

  ngOnInit(): void {
      this.eventsService.getEventPanne().subscribe(data=>{
        this.listeData=new MatTableDataSource(data);
        this.listeData.sort=this.sort
        this.listeData.paginator=this.paginator
      }
      )



  }


  edit(row) {
    this.eventsService.getEventJobs();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.Dialog.open(FormulaireeventPanneComponent, dialogConfig);
  }





  delete(row) {
  this.eventsService.deletepanne(row).subscribe({
    next:(rep)=>{
      this.eventsService.getEventPanne().subscribe(data=>{
        this.listeData=new MatTableDataSource(data);
      })
    },error:err=>{
      alert("erreur");
  }
})
  }

  onserchClise() {
    this.searchKey="";
    this.applyFilter();
  }

  applyFilter() {
    this.listeData.filter=this.searchKey.trim().toLowerCase();
  }
}
