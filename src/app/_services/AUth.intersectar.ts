import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";


@Injectable()
export class  AuthIntersectar implements HttpInterceptor{

constructor(private loginservice:LoginService){
}
  intercept(req: HttpRequest<any>,
            next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
//add authorization header with jwt token if available
    const token = this.loginservice.gettokens();
    if (token!=null) {
      authReq= authReq.clone({setHeaders:{Authorization:`Bearer ${token}`},});


  }
    return next.handle(authReq);

}
}
export const autInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS,
    useClass: AuthIntersectar,
    multi: true
  }
];

