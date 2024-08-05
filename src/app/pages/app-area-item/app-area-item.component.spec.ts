import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAreaItemComponent } from './app-area-item.component';

describe('AppAreaItemComponent', () => {
  let component: AppAreaItemComponent;
  let fixture: ComponentFixture<AppAreaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAreaItemComponent]
    });
    fixture = TestBed.createComponent(AppAreaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
