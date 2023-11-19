import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { AuthService } from 'src/app/services/auth.service';

export const IsNotAuthenticatedGuard : CanActivateFn = async (route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) => {
  const  auth = inject(AuthService);
  const router = inject(Router);

  const status = await auth.checkStatus();
  console.log('AUTHSguard', status);

  //  if(auth.authStatus() === AuthStatus.checking) return false;
  if(status === AuthStatus.authenticated) {
    router.navigateByUrl('/dashboard');
    console.log('FUE A DASH');
    return false;
  }
    console.log('NO FUE A NADA');
    return true;

}
