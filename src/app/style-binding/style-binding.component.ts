import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public hasError = false;
  public successColor = "red";
  public failureColor = "blue";
  public stylesObject = {
    color: 'brown',
    fontStyle: 'italic' // we cannot use - [hyphen] in [ngStyle] Object, we have to make use of CamelCase
  }

  constructor() { }

  ngOnInit(): void {
  }

}
