import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  areaSubject = new Subject<any>();
  areaSubject$ = this.areaSubject.asObservable();

  itemSubject=new Subject<any>();
  itemSubject$=this.itemSubject.asObservable();

  setAreaSubject(value:any){
    this.areaSubject.next(value)
  }

  setItemSubject(value:any){
    this.itemSubject.next(value)    
  }

}
