import { Component, OnInit } from '@angular/core';
import {PannesService} from "../../_services/pannes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formilaire-typespanne',
  templateUrl: './formilaire-typespanne.component.html',
  styleUrls: ['./formilaire-typespanne.component.css']
})
export class FormilaireTypespanneComponent implements OnInit {
  formulairetupespanne!: FormGroup
  constructor( private panneservice:PannesService,private form:FormBuilder) { }

  ngOnInit(): void {

    this.formulairetupespanne = this.form.group({
      libellet :this.form.control(null,[Validators.required]),
    })

  }

  savetypespanne() {
    this.panneservice.savepann(this.formulairetupespanne.value).subscribe({
        next: data => {
          alert("enregistrer")
        },error:err=>{
        alert("erreur");
      }
      } )
    this.formulairetupespanne.reset()


  }

}
