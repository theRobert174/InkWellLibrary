import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
import { AuthService } from 'src/app/services/auth.service';

import { LogData } from '../../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  private router = inject(Router);
  private auth = inject(AuthService);
  private fb : FormBuilder = inject(FormBuilder);

  public myForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });


  // public username: string = '';
  // public password: string = '';

  public enablePasswordManager: boolean = true;

  constructor() { }

  ngOnInit() {}

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  onSubmit(){
    if(this.myForm.invalid) { alert('Datos incorrectos'); }
    else {
      let email = this.myForm.controls['email'].value;
      let password = this.myForm.controls['password'].value;

      this.login( {email, password} );
    }
  }

  login( logData : LogData ){

    // let acceso = await this.auth.login( logData );
    // console.log('Accesso: ', acceso);
    this.auth.login( logData ).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: () => { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
    });
    // if( acceso! ) { this.router.navigate(['/dashboard']); }
    // else { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
  }

  google(){
    this.auth.loginWithGoogle().subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: () => { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
    });
    // if(acceso){ this.router.navigate(['/dashboard']); }
    // else { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
  }

}
