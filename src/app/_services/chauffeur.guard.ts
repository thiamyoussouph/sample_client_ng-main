import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class ChauffeurGuard implements CanActivate {
  constructor(private loginservice:LoginService,private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginservice.isLoggedIn() && this.loginservice.getUserRole() === 'ROLE_CHAUFFEUR') {
    return true;
  }
  this.router.navigate(['/login']);
     return false;
  }
}
