
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router) {
    
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (sessionStorage.getItem('token')!='' && sessionStorage.getItem('token')!=null) {
    //     //alert(sessionStorage.getItem('currentUser'))
    //     return true;
    // }

    console.log('AUTHGUARD',JSON.stringify(window.location));

    // navigate to login page
    // sessionStorage.clear();
    // window.location.href = 'http://172.27.21.31:3000/';
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

}
