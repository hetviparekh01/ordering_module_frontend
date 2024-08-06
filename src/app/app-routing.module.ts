import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileLayoutComponent } from './layout/mobile-layout/mobile-layout.component';

const routes: Routes = [
  {
    component:MobileLayoutComponent,
    path:'',
    loadChildren:()=>import("./pages/pages.module").then(m=>m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
