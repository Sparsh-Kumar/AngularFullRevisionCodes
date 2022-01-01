import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  public DataLst: any [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  requestInfoOfParent(e: any) {
    this.DataLst = e;
  }
}
