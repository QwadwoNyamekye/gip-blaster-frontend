import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable()
export class AuthGuard implements CanActivate {
    redirectUrl = environment.redirectUrl;

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // if (sessionStorage.getItem('token')!='' && sessionStorage.getItem('token')!=null) {
        //     //alert(sessionStorage.getItem('currentUser'))
        //     return true;
        // }

        // navigate to login page
        sessionStorage.clear();
        window.location.href = `${this.redirectUrl}`;    // you can save redirect url so after authing we can move them back to the page they requested
        return false;
    }

}
