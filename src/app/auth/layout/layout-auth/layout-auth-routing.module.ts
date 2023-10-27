import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutAuthPage } from './layout-auth.page';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthPage,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutAuthPageRoutingModule {}
