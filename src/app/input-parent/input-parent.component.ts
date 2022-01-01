import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {

  public dataLst: any [] = [
    'About',
    'SignUp',
    'SignIn',
    'Dashboard'
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ChangeData() {
    this.dataLst = [
      1,
      2,
      3,
      4,
    ];
  }

}
