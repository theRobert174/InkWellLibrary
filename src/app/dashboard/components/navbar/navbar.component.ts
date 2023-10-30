import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  private auth = inject(AuthService);
  private router = inject(Router)

  constructor() { }

  ngOnInit() {}

  async logout(){
    let resp = await this.auth.logout();
    if(resp) { this.router.navigate(['/auth/login']); }
  }

}
