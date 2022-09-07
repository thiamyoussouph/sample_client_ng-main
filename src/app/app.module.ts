import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// PrimeNg imports
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { VehiculesComponent } from './views/vehicules/vehicules.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelesComponent } from './views/modeles/modeles.component';
import { MarqueesComponent } from './views/marquees/marquees.component';
import { FormulaireVeculeComponent } from './views/formulaire-vecule/formulaire-vecule.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateVeculeComponent } from './views/update-vecule/update-vecule.component';
import { DetailsVeculesComponent } from './views/details-vecules/details-vecules.component';
import {CardModule} from "primeng/card";
import {CalendarModule} from "primeng/calendar";
import { VehiculedashbordComponent } from './views/vehiculedashbord/vehiculedashbord.component';
import { VehiculetatsedashbordComponent } from './views/vehiculetatsedashbord/vehiculetatsedashbord.component';
import { DashbordComponent } from './views/dashbord/dashbord.component';
import {DataTablesModule} from "angular-datatables";
import { PannesVehiculeComponent } from './views/pannes-vehicule/pannes-vehicule.component';
import { AjoutPanneComponent } from './views/ajout-panne/ajout-panne.component';

import { AjoutaffectationComponent } from './views/ajoutaffectation/ajoutaffectation.component';
import { ListAffectationComponent } from './parrametrage/list-affectation/list-affectation.component';
import {ParrametrageModule} from "./parrametrage/parrametrage.module";
import { FormulaireCreeUserComponent } from './views/formulaire-cree-user/formulaire-cree-user.component';
import { LoginComponent } from './views/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {autInterceptorProviders} from "./_services/AUth.intersectar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { FormilaireTypespanneComponent } from './views/formilaire-typespanne/formilaire-typespanne.component';
import { KilometrageComponent } from './views/kilometrage/kilometrage.component';
import {RatingModule} from "primeng/rating";
import {TableModule} from "primeng/table";
import { FormulaireKilometrageComponent } from './views/formulaire-kilometrage/formulaire-kilometrage.component';
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import { JobmaintenacesComponent } from './views/jobmaintenaces/jobmaintenaces.component';
import { ListetypmaintenacesComponent } from './views/listetypmaintenaces/listetypmaintenaces.component';
import { FormulaireJobmaintenacesComponent } from './views/formulaire-jobmaintenaces/formulaire-jobmaintenaces.component';
import { EventSComponent } from './views/event-s/event-s.component';
import { FormulaireEventSComponent } from './views/formulaire-event-s/formulaire-event-s.component';
import { FormulaireeventPanneComponent } from './views/formulaireevent-panne/formulaireevent-panne.component';
import { AccidentEventComponent } from './views/accident-event/accident-event.component';
import { FormulaireJOBmaintenanceComponent } from './views/formulaire-jobmaintenance/formulaire-jobmaintenance.component';
import { ListeEventpanneComponent } from './views/liste-eventpanne/liste-eventpanne.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { LisJOBmaintenanceEventComponent } from './views/lis-jobmaintenance-event/lis-jobmaintenance-event.component';
import { ListaccidentEventComponent } from './views/listaccident-event/listaccident-event.component';
import {MatSortable, MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    VehiculesComponent,
    ModelesComponent,
    MarqueesComponent,
    FormulaireVeculeComponent,
    UpdateVeculeComponent,
    DetailsVeculesComponent,
    VehiculedashbordComponent,
    VehiculetatsedashbordComponent,
    DashbordComponent,
    PannesVehiculeComponent,
    AjoutPanneComponent,
    AjoutaffectationComponent,
    FormulaireCreeUserComponent,
    LoginComponent,
    FormilaireTypespanneComponent,
    KilometrageComponent,
    FormulaireKilometrageComponent,
    JobmaintenacesComponent,
    ListetypmaintenacesComponent,
    FormulaireJobmaintenacesComponent,
    ListAffectationComponent,
    AjoutaffectationComponent,
    EventSComponent,
    FormulaireEventSComponent,
    FormulaireeventPanneComponent,
    AccidentEventComponent,
    FormulaireJOBmaintenanceComponent,
    ListeEventpanneComponent,
    LisJOBmaintenanceEventComponent,
    ListaccidentEventComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    RippleModule,
    BreadcrumbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    DataTablesModule,
    ParrametrageModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    RatingModule,
    TableModule,
    DropdownModule,
    InputNumberModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

  ],
  providers: [ autInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
