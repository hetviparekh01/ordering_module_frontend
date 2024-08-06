import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/core/services/area.service';
import { NgxToasterService } from 'src/app/core/services/ngx-toaster.service';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-mobile-layout',
  templateUrl: './mobile-layout.component.html',
  styleUrls: ['./mobile-layout.component.scss']
})
export class MobileLayoutComponent implements OnInit {
  data: any;
  queryParams={}
  areaData: any;
  constructor(
    private sharedService: SharedService,
    private areaService: AreaService,
    private toasterService: NgxToasterService,
  ) { }
  ngOnInit(): void {
    this.getAllAreas()
    this.getData();
  }

  getData() {
    this.sharedService.areaSubject$.subscribe(
      data => {
        this.data = data
        // console.log(data);
      }
    )
  }

  getAllAreas() {
    this.areaService.getAllAreas(this.queryParams).subscribe({
      next: (response) => {
        if (response.status) {
          this.sharedService.setAreaSubject(response.data);
          // this.data = response.data
        } else {
          this.toasterService.showError(response.messgae);
        }
      },
      error: (err) => {
        this.toasterService.showError(err.error.messgae);
      },
    });
  }

}
