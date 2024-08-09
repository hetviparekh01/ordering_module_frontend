import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  areaSubject = new Subject<any>();
  areaSubject$ = this.areaSubject.asObservable();



  setAreaSubject(value:any){
    this.areaSubject.next(value)
  }

 

}
