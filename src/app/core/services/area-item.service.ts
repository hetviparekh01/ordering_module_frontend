import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaItemService {

  constructor(private http:HttpClient) { }

  changeSequence(areaItemData:any){
    return this.http.post('/areaItem/changeSequence',areaItemData)
  }
  getAreaItemByArea(areaId: string, queryParams: any) {
    return this.http.get(`/areaItem/getAllAreaItemsByArea/${areaId}`, {
      params: queryParams
    })
  }
  deleteAreaItem(areaItemId:string){
    return this.http.delete(`/areaItem/deleteAreaItem/${areaItemId}`)
  }
}
