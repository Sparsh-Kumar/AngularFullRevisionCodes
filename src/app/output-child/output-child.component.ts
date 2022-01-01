import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() public requestInfo = new EventEmitter();
  public DataLst: number [] = [
    1,
    2,
    3,
    4,
    5
  ];
  constructor() { }

  ngOnInit(): void {
  }

  handleRequestInfo() {
    this.requestInfo.emit(this.DataLst as any);
  }

}
