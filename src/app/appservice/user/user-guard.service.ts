import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {

  sessval: string | null;
  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    debugger
    // this.sessval = sessionStorage.getItem('Username')
    // if(this.sessval=== null){
    //   //  this.router.navigate(['/base/pages/location'])
    //   return true
    // }
    // else{
    //   return false
    // }

    if (this.session.getsession('Username') != null) {
      // this.router.navigate(['/base/pages/location'])
      console.log(sessionStorage.length)
      return true

    }
    else {

      this.router.navigate(['/userlogin'])
      return false
    }
  }

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {

    return true

  }
}
