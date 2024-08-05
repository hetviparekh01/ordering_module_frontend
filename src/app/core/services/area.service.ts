import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http:HttpClient) { }

  getAllAreas(queryParams:any){
    return this.http.get<any>('/area/getAllAreas',{
      params:queryParams
    })
  }

  changeSequence(data:any){
    return this.http.post('/area/changeSequence',data)
  }

  deleteArea(areaId:string){
    return this.http.delete(`/area/deleteArea/${areaId}`)
  }

}
