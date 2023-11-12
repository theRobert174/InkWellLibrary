import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SharedModule } from '../shared/shared.module';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MatSliderModule,
    SharedModule,
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
