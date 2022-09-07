import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EventsService} from "../../_services/events.service";

@Component({
  selector: 'app-listaccident-event',
  templateUrl: './listaccident-event.component.html',
  styleUrls: ['./listaccident-event.component.css']
})
export class ListaccidentEventComponent implements OnInit {
  listeData:MatTableDataSource<any>

  displayedColumns: string[] = ['vehicules', 'datedebut','lieu','impacte','urgence','cause','description','action'];


  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEventaccident().subscribe(data=>{
        this.listeData=new MatTableDataSource(data);
      }
    )
  }

  edit(row) {

  }

  delete(row) {
    this.eventsService.deleAcccident(row).subscribe({
      next:(rep)=>{
        this.eventsService.getEventaccident().subscribe(data=>{
          this.listeData=new MatTableDataSource(data);
        })
      },error:err=>{
        alert("erreur");
      }
    })

  }
}
