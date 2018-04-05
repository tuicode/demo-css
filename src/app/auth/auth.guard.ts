import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  )
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!localStorage.getItem('currentUser')) 
    {
      this.router.navigate(['/login']);
      return false; 
    }   
    return true;
  }
}
