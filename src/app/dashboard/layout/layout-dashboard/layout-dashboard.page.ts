import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CloudService } from '../../services/cloud.service';
import { tap,map } from 'rxjs';

@Component({
  selector: 'app-layout-dashboard',
  templateUrl: './layout-dashboard.page.html',
  styleUrls: ['./layout-dashboard.page.scss'],
})
export class LayoutDashboardPage implements OnInit {

  //injeccion de dependencias
  private cloud = inject(CloudService);
  //propiedades reactivas
  private markdown = signal('Nothing here to display');
  public displayMarkdown = computed( () => this.markdown() );
  //variables generales
  public litter : any;


  constructor() {
    console.log('Constructor ', this.displayMarkdown());
  }

  async ngOnInit() {
    let resp = await this.cloud.md().pipe(
      tap(data => console.log('TAP DATA: ',data)),
      map(data => String(data)),
    ). subscribe(r => {

      console.log('REspuesta de nube: ', r);
      this.markdown.set(r.toString());
      this.litter = r.toString();

      console.log(this.markdown());
      console.log(typeof this.markdown());

      console.log(this.displayMarkdown());
      console.log(typeof this.displayMarkdown());
    });

  }

}
