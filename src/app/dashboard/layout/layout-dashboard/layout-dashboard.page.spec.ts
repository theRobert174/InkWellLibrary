import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutDashboardPage } from './layout-dashboard.page';

describe('LayoutDashboardPage', () => {
  let component: LayoutDashboardPage;
  let fixture: ComponentFixture<LayoutDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
