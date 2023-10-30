import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutAuthPageRoutingModule } from './layout-auth-routing.module';

import { LayoutAuthPage } from './layout-auth.page';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LayoutAuthPageRoutingModule
  ],
  declarations: [
    LayoutAuthPage,
    LoginComponent,
    RegisterComponent,
  ]
})
export class LayoutAuthPageModule {}
