import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppAreaItemComponent } from './app-area-item/app-area-item.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'appHomePage',
    pathMatch:'full'
  },
  {
    path:'appHomePage',
    component:AppHomePageComponent
  },
  {
    path:'appAreaItem/:id',
    component:AppAreaItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
