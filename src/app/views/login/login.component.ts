import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginService} from "../../_services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginDta={
  username:"",
  password:"",
}
  constructor(private snack:MatSnackBar,private loginservice:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  Formesubmit() {
    console.log(this.loginDta);
    if (this.loginDta.username.trim() == "" && this.loginDta.password.trim() == "") {
this.snack.open('user ou password obligatoire', '', {
  duration: 2000,
});
return;
    }
    this.loginservice.generateToken(this.loginDta).subscribe(
      (data : any)=>{
        console.log("sucesss");
        console.log(data);
        this.loginservice.loginUser(data.token);
      this.loginservice.getCurrentUser().subscribe(
        (user:any)=>{
          this.loginservice.setUser(user);
          console.log(user);
          //redirection admin
          if (this.loginservice.getUserRole()=="ROLE_ADMIN"){
            this.loginservice.loginStatusSubject.next(true);
            this.router.navigate(['/']);
          }else if (this.loginservice.getUserRole()=="ROLE_CHAUFFEUR"){
            this.loginservice.loginStatusSubject.next(true);
            //redirection chauffeur
            this.router.navigate(['/vehicules']);
          }else if (this.loginservice.getUserRole()=="ROLE_CONTROLLER"){
            //redirection controller

          }else {
            this.loginservice.logout();
          }
        }
      );


      },(error)=>{
        console.log("error");
        console.log(error)
        this.snack.open('user ou password incorrect', '' , {  duration: 2000,});
      }
    );
  }
}
