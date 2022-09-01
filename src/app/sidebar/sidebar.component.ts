import { Component, OnInit } from '@angular/core';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuItem,} from 'primeng/api';
import {getChildElementIndentation} from "@angular/cdk/schematics";




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
        label: 'Pannes',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list',routerLink:'pannes'},
          { label: 'Creer', icon: 'pi pi-fw pi-plus',routerLink:'formulairepannes'}
        ]
      },
      {
        label: 'Rappelles',
        items: [
          { label: 'Tous', icon: 'pi pi-fw pi-list', },
          { label: 'Creer', icon: 'pi pi-fw pi-plus'}
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
