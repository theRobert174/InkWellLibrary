import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthPage } from './layout/layout-auth/layout-auth.page';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    // component: LayoutAuthPage,
    // children: [
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent },
    //   { path: '**', redirectTo: 'login' },
    // ]
    loadChildren: () => import('./layout/layout-auth/layout-auth.module').then(m => m.LayoutAuthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
