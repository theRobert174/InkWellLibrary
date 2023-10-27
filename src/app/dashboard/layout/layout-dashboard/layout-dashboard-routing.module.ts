import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDashboardPage } from './layout-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutDashboardPageRoutingModule {}
