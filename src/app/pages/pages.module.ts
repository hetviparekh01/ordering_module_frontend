import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { SharedModule } from "../shared/shared.module";
import { AppAreaItemComponent } from './app-area-item/app-area-item.component';
import { RouterModule } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppHomePageComponent,
    AppAreaItemComponent,
    MobileComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule
]
})
export class PagesModule { }
