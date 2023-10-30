import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { LogData } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);

  private _userCredentials = signal<any>(null);
  private _token = signal<any>(null);

  constructor() { }

  async register( { email, password } : LogData ) {

    let resp = await createUserWithEmailAndPassword(this.auth, email, password)
    .then( userCredentials => {
      this._userCredentials.set(userCredentials.user);
      console.log('signal contiene: ', this._userCredentials());
      return true;
    })
    .catch( err => {
      console.log(`ERROR: ${err.code}, ${err.message}`);
      return false;
    } );
    // return null;
    console.log('resp', resp);
    return resp;
  }

  async login( { email, password } : LogData ) {
    let resp = await signInWithEmailAndPassword(this.auth, email, password)
    .then( userCredentials => {
      this._userCredentials.set(userCredentials.user);
      console.log('signal contiene: ', this._userCredentials());
      return true;
    })
    .catch( err => {
      console.log(`ERROR: ${err.code}, ${err.message}`);
      return false;
    });
    // return null;
    console.log('resp', resp);
    return resp;
  }

  async loginWithGoogle(){
    let resp = await signInWithPopup(this.auth, new GoogleAuthProvider())
    .then( result => {
      this._userCredentials.set(GoogleAuthProvider.credentialFromResult(result));
      this._token.set(this._userCredentials().accessToken)
      const user = result.user;

      console.log('Credenciales Google: ', this._userCredentials());
      console.log('Token Google: ', this._token());
      console.log('User Google: ', user);

      return true;
    })
    .catch( err => {

      const errorCode = err.code;
      const errorMessage = err.message;

      const email = err.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(err);

      console.log('Codigo de error', errorCode);
      console.log('Mensaje de error', errorMessage);
      console.log('email del error', email);
      console.log('Credencial de error', credential);
      return false;
    });
    return resp;
  }

  loginWithCredentials(){

  }

  async logout(){
    let resp = signOut(this.auth)
    .then( s => {
      console.log('Salio bien: ',s);
      return true;
    } )
    .catch(err => {
      console.log(`ERROR: ${err.code}, ${err.message}`);
      return false;
    } );
    return resp;
  }

}
