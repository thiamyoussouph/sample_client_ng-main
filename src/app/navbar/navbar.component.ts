import { Component, OnInit } from '@angular/core';
import {LoginService} from "../_services/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 isLoggedIn=false;
user=null ;
  constructor( public loginservice:LoginService) { }

  ngOnInit(): void {
   this.isLoggedIn= this.loginservice.isLoggedIn() ;
    this.user=this.loginservice.getUser();
    this.loginservice.loginStatusSubject.asObservable().subscribe(  data=>{
      this.isLoggedIn= this.loginservice.isLoggedIn() ;
      this.user=this.loginservice.getUser();

                 }  );
  }

  logout() {
    this.loginservice.logout();

    //window.location.reload();
    this.loginservice.loginStatusSubject.next(false);
  }
}
