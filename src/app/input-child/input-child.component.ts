import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {

  /**
   * Okay! so basically the three most important ways to transfer data between components are:
   * 1. @ViewChild()
   * 2. @Input() and @Output() (Only if the components have parent child relationship)
   * 3. Services
   * 
   * 
   * To cut it short and simple @Input() is used to pass data from parent to child component and @Output() is used to pass data from child to parent.
   */

  @Input() public requestDataLst: string [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
