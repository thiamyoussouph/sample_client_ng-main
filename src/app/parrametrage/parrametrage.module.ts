import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParrametrageComponent } from './parrametrage.component';
import {PannesComponent} from "./pannes/pannes.component";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ListAffectationComponent} from "./list-affectation/list-affectation.component";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";



@NgModule({
  declarations: [
    ParrametrageComponent,
    PannesComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    FormsModule,
    RatingModule
  ]
})
export class ParrametrageModule { }
