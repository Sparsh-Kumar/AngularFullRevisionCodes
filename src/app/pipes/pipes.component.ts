import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = 'My name is SpARsh kUMAr'
  public jsonData = {
    number: 2,
    message: 'this is my number'
  }
  public myDate = new Date ();
  constructor() { }

  ngOnInit(): void {
  }

}
