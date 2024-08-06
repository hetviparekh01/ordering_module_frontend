import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/core/services/shared.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  areaData:any;
  itemData:any;
  constructor(private sharedService:SharedService){}
  ngOnInit(): void {
    this.getAreaData();
    this.getItemData()
    // console.log(this.data);
  }

  getAreaData(){
    this.sharedService.areaSubject$.subscribe(
      data=>{
        this.areaData =data
        console.log(data,"areadata");
      }
    )
  }

  getItemData(){
    this.sharedService.itemSubject$.subscribe(
      data=>{
        this.itemData=data;
        console.log(data,"itemData");
      }
    )
  }

  nextItem() {
    throw new Error('Method not implemented.');
  }
}
