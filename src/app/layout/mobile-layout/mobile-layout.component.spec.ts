import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLayoutComponent } from './mobile-layout.component';

describe('MobileLayoutComponent', () => {
  let component: MobileLayoutComponent;
  let fixture: ComponentFixture<MobileLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileLayoutComponent]
    });
    fixture = TestBed.createComponent(MobileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
