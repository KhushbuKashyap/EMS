import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {
  sessval: string | null;

  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable <boolean | UrlTree> | Promise<boolean | UrlTree>{
    debugger
    this.sessval = sessionStorage.getItem('Username')
    if(this.sessval=== null){
       this.router.navigate(['/adminlogin'])
      console.log(this.sessval)
      return false
    }
    else{
      return true
    }
  }
}
