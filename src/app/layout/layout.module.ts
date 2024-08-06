import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileLayoutComponent } from './mobile-layout/mobile-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MobileLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
