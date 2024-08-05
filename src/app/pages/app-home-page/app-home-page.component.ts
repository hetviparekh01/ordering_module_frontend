import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { AreaService } from 'src/app/core/services/area.service';
import { NgxToasterService } from 'src/app/core/services/ngx-toaster.service';
import { CellRendererComponent } from 'src/app/shared/cell-renderer/cell-renderer.component';

@Component({
  selector: 'app-app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.scss']
})
export class AppHomePageComponent implements OnInit {
  queryParams={};
  areaData:any;
  columnDefs:ColDef[]=[
    { field: "_id", rowDrag: true ,flex:2},
    { field: "areaName" ,flex:1},
    { field: "sequence" ,flex:1},
    {field:"Action",flex:1,cellRenderer:CellRendererComponent,cellRendererParams:{
      updateBtn:(id:string)=>this.updateArea(id),
      deleteBtn:(id:string)=>this.deleteArea(id)
    }}
  ]
  constructor (private areaService:AreaService,private toasterService:NgxToasterService,private router:Router){}
  ngOnInit(): void {
    this.getAllAreas()
  }
  updateArea(id: string) {
    this.router.navigate([`/appAreaItem/${id}`])
  }
  deleteArea(id: string) {
   this.areaService.deleteArea(id).subscribe({
     next: (response:any) => {
       if (response.status) {
          this.getAllAreas()
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
  getAllAreas(){
    this.areaService.getAllAreas(this.queryParams).subscribe({
      next:(response) =>{
        if(response.status){
          this.areaData =response.data
        }else{
          this.toasterService.showError(response.messgae)
        }
      },
      error:(err)=> {
        this.toasterService.showError(err.error.messgae)
      },
    })
  }
  changeSequence(e:any) {
    const sequence = e.overIndex + 1;
    const areaId = e.node.data._id;

    if (e.overIndex > -1) {
      this.areaService.changeSequence({ sequence, areaId }).subscribe({
        next:(response:any) =>{
          if(response.status){
            this.getAllAreas()
          }else{
            this.toasterService.showError(response.messgae)
          }
        },
        error: (err) => {
          this.toasterService.showError(err.error.messgae)
        },
      });
    }
  }

}
