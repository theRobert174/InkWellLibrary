import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const IsAuthenticatedGuard : CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) =>  {
   const  auth = inject(AuthService);
   const router = inject(Router);

  //  if(auth.authStatus() === AuthStatus.checking) return false;
   if(auth.authStatus() === AuthStatus.authenticated) return true;


    router.navigateByUrl('/auth/login');
    return false;
}
