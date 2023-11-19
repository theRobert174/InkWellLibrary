import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { UserData } from 'src/app/auth/interfaces';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  private auth = inject(AuthService);
  private router = inject(Router);

  private modalCtrl = inject(ModalController);

  public userData = signal<UserData>({});

  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor() {
    this.userData.set(this.auth.currentLoggedUser());
  }

  ngOnInit() {}

  logout(){
    this.auth.logout().then(r => {
      console.log('Response: ', r);
      if(r) this.router.navigate(['/auth/login']);
    });

  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileModalComponent,
      backdropDismiss: false,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}
