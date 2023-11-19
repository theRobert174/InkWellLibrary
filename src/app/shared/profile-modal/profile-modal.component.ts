import { Component, OnInit, inject, signal } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { UserData } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent  implements OnInit {

  private auth = inject(AuthService);
  private modalCtrl = inject(ModalController);
  private toastCtrl = inject(ToastController);

  public userData = signal<UserData>({});
  public isEditMode = signal(false);

  name: string = '';

  constructor() {}

  ngOnInit() {
    this.userData.set(this.auth.currentLoggedUser());
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

  closeModal() {
    if(!this.isEditMode()) this.modalCtrl.dismiss();
    else this.toastShow();
  }

  modifyData(){
    if(!this.isEditMode()) this.isEditMode.set(true);
    else this.isEditMode.set(false);
  }

  async toastShow(){
    const toast = await this.toastCtrl.create({
      header: 'Modo edicion',
      message: 'Confirma o cancela la edicion de datos',
      duration: 1500,
      position: 'top',
      color: 'warning',
    });

    await toast.present();
  }

}
