import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-renderer',
  templateUrl: './cell-renderer.component.html',
  styleUrls: ['./cell-renderer.component.scss']
})
export class CellRendererComponent implements ICellRendererAngularComp {
  params:any
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params=params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }
  updateBtn() {
    this.params.updateBtn(this.params.data._id)
  }
  deleteBtn() {
    this.params.deleteBtn(this.params.data._id)
  }
}
