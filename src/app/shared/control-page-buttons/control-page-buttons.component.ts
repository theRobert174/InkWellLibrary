import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  selector: 'shared-control-page-buttons',
  templateUrl: './control-page-buttons.component.html',
  styleUrls: ['./control-page-buttons.component.scss'],
})
export class ControlPageButtonsComponent  implements OnInit {

  @Input() totalPages : number = 0;
  @Output() currentPageSent = new EventEmitter<number>();

  public currentPage = signal(1);

  constructor() { }

  ngOnInit() {}

  nextPage(){
    this.currentPage.update( p => p+1 );
    // console.log('nextPage', this.currentPage());
    if(this.currentPage() > this.totalPages) this.currentPage.update( p => p-1 );
    else {
      // this.currentPage.update( p => p+1 );
      this.currentPageSent.emit(this.currentPage());
    }
    // console.log('nextPage', this.currentPage());
  }

  previousPage() {
    this.currentPage.update( p => p-1 );
    // console.log('previousPage', this.currentPage());
    if(this.currentPage() <= 0) this.currentPage.set(1);
    else {
      // this.currentPage.update( p => p-1 );
      this.currentPageSent.emit(this.currentPage());
    }
    // console.log('previousPage', this.currentPage());
  }

}
