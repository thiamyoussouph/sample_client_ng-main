import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculesComponent } from './views/vehicules/vehicules.component';
import {FormulaireVeculeComponent} from "./views/formulaire-vecule/formulaire-vecule.component";
import {ModelesComponent} from "./views/modeles/modeles.component";
import {MarqueesComponent} from "./views/marquees/marquees.component";
import {UpdateVeculeComponent} from "./views/update-vecule/update-vecule.component";
import {DetailsVeculesComponent} from "./views/details-vecules/details-vecules.component";
import {DashbordComponent} from "./views/dashbord/dashbord.component";
import {PannesComponent} from "./parrametrage/pannes/pannes.component";
import {PannesVehiculeComponent} from "./views/pannes-vehicule/pannes-vehicule.component";
import {AjoutPanneComponent} from "./views/ajout-panne/ajout-panne.component";
import {ParrametrageComponent} from "./parrametrage/parrametrage.component";
import {ListAffectationComponent} from "./parrametrage/list-affectation/list-affectation.component";
import {AjoutaffectationComponent} from "./views/ajoutaffectation/ajoutaffectation.component";
import {FormulaireCreeUserComponent} from "./views/formulaire-cree-user/formulaire-cree-user.component";
import {LoginComponent} from "./views/login/login.component";
import {AdminGuard} from "./_services/admin.guard";
import {FormilaireTypespanneComponent} from "./views/formilaire-typespanne/formilaire-typespanne.component";
import {KilometrageComponent} from "./views/kilometrage/kilometrage.component";
import {FormulaireKilometrageComponent} from "./views/formulaire-kilometrage/formulaire-kilometrage.component";
import {JobmaintenacesComponent} from "./views/jobmaintenaces/jobmaintenaces.component";
import {ListetypmaintenacesComponent} from "./views/listetypmaintenaces/listetypmaintenaces.component";
import {FormulaireJobmaintenacesComponent} from "./views/formulaire-jobmaintenaces/formulaire-jobmaintenaces.component";
import {EventSComponent} from "./views/event-s/event-s.component";
import {FormulaireEventSComponent} from "./views/formulaire-event-s/formulaire-event-s.component";
import {FormulaireeventPanneComponent} from "./views/formulaireevent-panne/formulaireevent-panne.component";
import {AccidentEventComponent} from "./views/accident-event/accident-event.component";
import {FormulaireJOBmaintenanceComponent} from "./views/formulaire-jobmaintenance/formulaire-jobmaintenance.component";
import {ListeEventpanneComponent} from "./views/liste-eventpanne/liste-eventpanne.component";
import {LisJOBmaintenanceEventComponent} from "./views/lis-jobmaintenance-event/lis-jobmaintenance-event.component";
import {ListaccidentEventComponent} from "./views/listaccident-event/listaccident-event.component";


const routes: Routes = [
  {
    path: 'vehicules',
    component: VehiculesComponent,
    data: {
      breadcrumb: 'Vehicules',
    },  },

    { path: 'vehicules/forme', component: FormulaireVeculeComponent,
      data: {breadcrumb: 'Formulaire Vehicule',},
  },
  {path: 'modele', component: ModelesComponent},
  {path: 'marque', component: MarqueesComponent},
  {path: 'typesvehicule', component: VehiculesComponent},
  {path: 'updatevehicule/:id', component: UpdateVeculeComponent},
  {path: 'detail/:id', component: DetailsVeculesComponent,
    data: {
  breadcrumb: 'detailvehicule'
}},
  {path: '', component: DashbordComponent ,
   canActivate: [AdminGuard]} ,
  {path: 'pannes', component: PannesVehiculeComponent,
    data: {
      breadcrumb: 'pannes'
    },},
  {path: 'formulairepannes', component: AjoutPanneComponent,
    data: {
    title: 'formulaire pannes',
      breadcrumb: 'formulaire pannes',
    },},
  {path: 'parametre', component: ParrametrageComponent,
    data: {
      breadcrumb: 'parametrage',
    },children: [
      {path: 'typespanne', component:PannesComponent },
      {path: 'creerutilisateur', component:FormulaireCreeUserComponent},
      {path: 'typespannes', component:FormilaireTypespanneComponent},
      {path: 'jobmaintenances', component: JobmaintenacesComponent},
      {path: 'ajoutJop', component: FormulaireJobmaintenacesComponent},

    ]},
  {path: 'login', component:LoginComponent},
  {path: 'kilometrage', component:KilometrageComponent},
  {path: 'formekilometrage', component:FormulaireKilometrageComponent},
  {path: 'pannesresolu', component: PannesVehiculeComponent},

  {path: 'typesJobs', component: ListetypmaintenacesComponent},
  {path: 'affectation', component: ListAffectationComponent,
    data: {
      breadcrumb: 'affectation',}},
  {path: 'formtaffectation', component:AjoutaffectationComponent},
  {path: 'event', component:EventSComponent ,
    data: {
      breadcrumb: 'evenement',}},
  {path: 'eventforme', component:FormulaireEventSComponent ,
    data: {
      breadcrumb: 'ajouter',}},
  {path: 'creerpanne', component:FormulaireeventPanneComponent,
    data: {
      breadcrumb: 'formulaire panne',}},
  {path: 'creeracccident', component:AccidentEventComponent,
    data: {
      breadcrumb: 'formulaire accidents',}},
  {path: 'creerjob', component:FormulaireJOBmaintenanceComponent},
  {path: 'evetlistePanne', component:ListeEventpanneComponent,
    data: {
      breadcrumb: 'Pannes',}},
  {path: 'evetlistejob', component:LisJOBmaintenanceEventComponent  ,data: {
      breadcrumb: 'Jobs',}},
  {path: 'evetlisteaccident', component:ListaccidentEventComponent,
    data: {
      breadcrumb: 'Accidents',}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
