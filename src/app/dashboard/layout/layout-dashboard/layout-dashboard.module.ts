import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutDashboardPageRoutingModule } from './layout-dashboard-routing.module';

import { LayoutDashboardPage } from './layout-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutDashboardPageRoutingModule
  ],
  declarations: [LayoutDashboardPage]
})
export class LayoutDashboardPageModule {}
