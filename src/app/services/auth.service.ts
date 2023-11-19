import { Injectable, inject, signal, computed } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserLocalPersistence, authState } from '@angular/fire/auth';
import { LogData, UserData } from '../auth/interfaces';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AuthStatus } from '../auth/interfaces/auth-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);

  private _userCredentials = signal<any>(null);
  private _token = signal<any>(null);
  private _currentUser = signal<UserData>({});
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentLoggedUser = computed( () => this._currentUser() );
  public authStatus = computed( () => this._authStatus());

  constructor() {
    this.auth.setPersistence(browserLocalPersistence)/*.then(r => console.log(r)).catch(e => console.log(e))*/;
    this.checkAuthStatus().subscribe();
  }

  checkAuthStatus() : Observable<boolean>{
    return authState(this.auth).pipe(
      map( (status) => {
        if(status != undefined || status != null){
          this._currentUser.set({
                  displayName:    status?.displayName,
                  email:          status?.email,
                  emailVerified:  status?.emailVerified,
                  phoneNumber:    status?.phoneNumber,
                  photoURL:       status?.photoURL,
                  uid:            status?.uid
          });
          this._authStatus.set(AuthStatus.authenticated);
          console.log('USER', this.currentLoggedUser());
          return true;
        }
        return false;
      }),
      catchError( () => {
        this._authStatus.set(AuthStatus.notAuthenticated);
        console.log('ERROR NOT LOGGED');
        return of(false);
      })
    );
  }

  checkStatus(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        console.log('timer_', this._authStatus());
        console.log('timer', this.authStatus());
        resolve(this.authStatus());
      }, 500);
    });
  }

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

  login( { email, password } : LogData ) : Observable<boolean> {

    return new Observable<boolean>( observer => {
      signInWithEmailAndPassword(this.auth, email, password)
      .then( async userCredential  => {
        console.log('RESP', userCredential);
        this._authStatus.set(AuthStatus.authenticated);
        observer.next(true);
        observer.complete();
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        observer.error(false);
        observer.complete();
      });
    });

  }

  loginWithGoogle() : Observable<boolean>{
    return new Observable<boolean>( observer => {
      signInWithPopup(this.auth, new GoogleAuthProvider())
      .then( result => {

        this._userCredentials.set(GoogleAuthProvider.credentialFromResult(result));
        this._token.set(this._userCredentials().accessToken)

        const user = result.user;

        console.log('Credenciales Google: ', this._userCredentials());
        console.log('Token Google: ', this._token());
        console.log('User Google: ', user);

        this._authStatus.set(AuthStatus.authenticated);

        observer.next(true);
        observer.complete();
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
        observer.error(false);
        observer.complete();
      });
    });
  }

  async logout(){
    let resp = await signOut(this.auth)
    .then( s => {
      console.log('Salio bien: ',s);
      this._authStatus.set(AuthStatus.notAuthenticated);
      this._userCredentials.set(null);
      console.log('fff',this.authStatus());
      return true;
    } )
    .catch(err => {
      console.log(`ERROR: ${err.code}, ${err.message}`);
      return false;
    } );
    return resp;
  }
}
