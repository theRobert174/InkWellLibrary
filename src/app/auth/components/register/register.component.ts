import { Component, OnInit, inject } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogData } from '../../interfaces';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  private router = inject(Router)
  private auth  = inject(AuthService);
  private fb : FormBuilder = inject(FormBuilder);

  public myForm : FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    lastName: ['', [Validators.required, Validators.minLength(3)] ],
    userName: ['', [Validators.required, Validators.minLength(3)] ],
    email: ['', [Validators.required, Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(8)] ],
  });

  public enablePasswordManager: boolean = true;

  constructor() { }

  ngOnInit() {}

  togglePasswordVisibility() {
    // toggle the password input type between "text" and "password"
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
 }

 onSubmit(){
  if(this.myForm.invalid) { alert('Datos incorrectos'); }
  else {
    let email = this.myForm.controls['email'].value;
    let password = this.myForm.controls['password'].value;

    this.register( {email, password} );
  }
 }

 async register( logdata: LogData){
  let acceso = await this.auth.register(logdata);
  console.log('Acceso: ', acceso);
  if(acceso!) { this.router.navigate(['/dashboard']); }
  else { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
 }

 async google(){
  let acceso = await this.auth.loginWithGoogle();
  if(acceso){ this.router.navigate(['/dashboard']); }
  else { console.log('El servicio fue nulo'); alert('Datos incorrectos'); }
 }

}
