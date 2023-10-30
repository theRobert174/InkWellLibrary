import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  private router = inject(Router);
  // private router = inject(NavController);

  // the username and password variables to hold the input data
 public username: string = '';
 public password: string = '';

 // whether or not to use the browser's native password manager
 public enablePasswordManager: boolean = true;

  constructor() { }

  ngOnInit() {}

  togglePasswordVisibility() {
    // toggle the password input type between "text" and "password"
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
 }

 onClick(){

 }

 login(){
  // this.router.navigateRoot('/dashboard')
  this.router.navigate(['/dashboard'])
 }

}
