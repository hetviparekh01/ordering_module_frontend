import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RowDragEndEvent } from 'ag-grid-community';
import { AreaService } from 'src/app/core/services/area.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  @Input() rowData: any;
  @Input() columnDefs: any;
  @Output() changeSequenceEvent = new EventEmitter<any>();
  
  constructor(private areaService: AreaService) {}

  changeSequence(e: RowDragEndEvent<any, any>){
    this.changeSequenceEvent.emit(e)
  }
  
}
