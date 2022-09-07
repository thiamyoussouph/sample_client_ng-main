import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {EventsService} from "../../_services/events.service";

@Component({
  selector: 'app-lis-jobmaintenance-event',
  templateUrl: './lis-jobmaintenance-event.component.html',
  styleUrls: ['./lis-jobmaintenance-event.component.css']
})
export class LisJOBmaintenanceEventComponent implements OnInit {
  listeData:MatTableDataSource<any>

  displayedColumns: string[] = ['vehicules', 'datedebut','lieu','typesJobDeMaintenance','action'];


  constructor(private eventsService:EventsService) { }

  ngOnInit(): void {
    this.eventsService.getEventJobs().subscribe(data=>{
      this.listeData=new MatTableDataSource(data);
    })
  }

  delete(row) {
    this.eventsService.delejobmaintenance(row).subscribe({
      next:(rep)=>{
        this.eventsService.getEventJobs().subscribe(data=>{
          this.listeData=new MatTableDataSource(data);
        })
      },error:err=>{
        alert("erreur");
      }
    })

  }

  edit(row) {

  }
}
