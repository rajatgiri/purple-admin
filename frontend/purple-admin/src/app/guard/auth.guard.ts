import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate()
  {
    if(localStorage.getItem('uid')!=null)
    {
      return true;
    }
    else
    {
      alert("You are not authorize to view this page");
      this.router.navigate(['/'])
    }
  }
}
