import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookPageComponent } from './book-page/book-page.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ControlPageButtonsComponent } from './control-page-buttons/control-page-buttons.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BookPageComponent,
    ControlPageButtonsComponent,
    ProfileModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    MarkdownModule.forChild(),
    MatSliderModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BookPageComponent
  ]
})
export class SharedModule { }
