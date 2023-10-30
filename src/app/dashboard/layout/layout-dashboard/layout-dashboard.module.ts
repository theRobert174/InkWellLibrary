import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutDashboardPageRoutingModule } from './layout-dashboard-routing.module';

import { LayoutDashboardPage } from './layout-dashboard.page';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MarkdownModule } from 'ngx-markdown';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkdownModule.forChild(),
    LayoutDashboardPageRoutingModule
  ],
  declarations: [
    LayoutDashboardPage,
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutDashboardPageModule {}
