import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutAuthPage } from './layout/layout-auth/layout-auth.page';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    // LayoutAuthPage,
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
