import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AreaItemService } from 'src/app/core/services/area-item.service';
import { AreaService } from 'src/app/core/services/area.service';
import { NgxToasterService } from 'src/app/core/services/ngx-toaster.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { CellRendererComponent } from 'src/app/shared/cell-renderer/cell-renderer.component';

@Component({
  selector: 'app-app-area-item',
  templateUrl: './app-area-item.component.html',
  styleUrls: ['./app-area-item.component.scss'],
})
export class AppAreaItemComponent implements OnInit {
  queryParams = {};
  areaId = this.activatedRoute.snapshot.paramMap.get('id') as string;
  areaItemData: any;
  columnDefs: ColDef[] = [
    { field: '_id', rowDrag: true, flex: 2 },
    { field: 'areaDetails.areaName', flex: 1 },
    { field: 'itemDetails.itemName', flex: 1 },
    { field: 'sequence', flex: 1 },
    {
      field: 'Action',
      flex: 1,
      cellRenderer: CellRendererComponent,
      cellRendererParams: {
        updateBtn: (id: string) => this.updateAreaItem(id),
        deleteBtn:(id:string)=>this.deleteAreaItem(id)
      },
    },
  ];
  areaData: any;
  constructor(
    private areaItemService: AreaItemService,
    private toasterService: NgxToasterService,
    private activatedRoute: ActivatedRoute,
    private sharedServcie:SharedService ,
    private areaService: AreaService,
  ) {}
  ngOnInit(): void {
    this.getAreaItemByArea()
  }
  updateAreaItem(id: string) {
    throw new Error('Method not implemented.');
  }
  deleteAreaItem(id: string) {
    this.areaItemService.deleteAreaItem(id).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.getAreaItemByArea()
          this.toasterService.showSuccess(response.message)
        } else {
          this.toasterService.showError(response.messgae)
        }
      },
      error: (err) => {
        this.toasterService.showError(err.error.messgae)
      },
    })
  }
  getAreaItemByArea() {
    this.areaItemService
      .getAreaItemByArea(this.areaId, this.queryParams)
      .subscribe({
        next: (response: any) => {
          if (response.status) {
            this.areaItemData = response.data;
          } else {
            this.toasterService.showError(response.messgae);
          }
        },
        error: (err) => {
          this.toasterService.showError(err.error.messgae);
        },
      });
  }
  changeSequence(e: any) {
    const sequence = e.overIndex + 1;
    const areaItemId = e.node.data._id;

    if (e.overIndex > -1) {
      this.areaItemService.changeSequence({ sequence, areaItemId }).subscribe({
        next: (response: any) => {
          if (response.status) {
            this.getAreaItemByArea();
            this.getAllAreas()
          } else {
            this.toasterService.showError(response.messgae)
          }
        },
        error: (err) => {
          this.toasterService.showError(err.error.messgae)
        },
      });
    }
  }
  getAllAreas() {
    this.areaService.getAllAreas(this.queryParams).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status) {
          this.sharedServcie.setAreaSubject(response.data)
          this.areaData = response.data
        } else {
          this.toasterService.showError(response.messgae)
        }
      },
      error: (err) => {
        this.toasterService.showError(err.error.messgae)
      },
    })
  }
}
