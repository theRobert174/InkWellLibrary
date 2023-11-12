import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'shared-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent  implements OnInit {

  private data = inject(DataService);

  public _links = signal<string[]>([]);
  public currentLink = computed( () => this._links()[this.value()-1] );
  public value = signal(1);

  constructor() { }

  ngOnInit() {
    this.data.getJsonData().subscribe( data => {
      this._links.set(data);
    });
  }

  updatePageTo(page: number){
    this.value.set(page);
  }

}
