import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name = "Niskarsh";
  public currentURL = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  MyCustomFunction () {
    return JSON.stringify ({
      property_name: 'this is the property value'
    })
  }

}
