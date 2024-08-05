import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { DatatableComponent } from './datatable/datatable.component';
import { CellRendererComponent } from './cell-renderer/cell-renderer.component';



@NgModule({
  declarations: [
    DatatableComponent,
    CellRendererComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular
  ],
  exports:[
    DatatableComponent,
    CellRendererComponent
  ]
})
export class SharedModule { }
