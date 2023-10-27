import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutAuthPage } from './layout-auth.page';

describe('LayoutAuthPage', () => {
  let component: LayoutAuthPage;
  let fixture: ComponentFixture<LayoutAuthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
