import { Component, OnInit } from '@angular/core';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem,} from 'primeng/api';
import {getChildElementIndentation} from "@angular/cdk/schematics";
import {FormulaireeventPanneComponent} from "../views/formulaireevent-panne/formulaireevent-panne.component";
import {AccidentEventComponent} from "../views/accident-event/accident-event.component";
import {
  FormulaireJOBmaintenanceComponent
} from "../views/formulaire-jobmaintenance/formulaire-jobmaintenance.component";




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {

    this.items = [
      {
        label: 'Vehicules',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', routerLink: 'vehicules'},
          { label: 'Creer',icon: 'pi pi-fw pi-plus',routerLink:['vehicules/forme'] }

        ]
      },
      {
        label: 'Evennements',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list',routerLink:'event'},
          { label: ' Pannes', icon: 'pi pi-fw pi-list',routerLink:['evetlistePanne'] },
          { label: 'accidents', icon: 'pi pi-fw pi-list',routerLink:'evetlisteaccident'},
          { label: 'Jobs', icon: 'pi pi-fw pi-list',routerLink:'evetlistejob'}

        ]
      },
      {
        label: 'Contrôles',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', },
          { label: 'Creer', icon: 'pi pi-fw pi-plus'}
        ]
      },
      {
        label: 'affectation',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', routerLink:'affectation' },
          { label: 'Creer', icon: 'pi pi-fw pi-plus',routerLink:'formtaffectation'},

        ]
      }
      ,
      {
        label: 'parrametre',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', routerLink:'parametre'},
          { label: 'Creer', icon: 'pi pi-fw pi-plus'}
        ]
      }
    ];

  }

}
