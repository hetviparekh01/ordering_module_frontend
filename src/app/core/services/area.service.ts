import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {


  constructor(private http:HttpClient) { }

  getAllAreas(queryParams:any){
    const dataObesrevable= this.http.get<any>('/area/getAllAreas',{
      params:queryParams
    });
    return dataObesrevable
  }



  changeSequence(data:any){
    return this.http.post('/area/changeSequence',data)
  }

  deleteArea(areaId:string){
    return this.http.delete(`/area/deleteArea/${areaId}`)
  }

}
