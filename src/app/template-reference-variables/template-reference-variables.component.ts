import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  templateUrl: './template-reference-variables.component.html',
  styleUrls: ['./template-reference-variables.component.css']
})
export class TemplateReferenceVariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage (template: any) {
    console.log (template); // this will display the handle to the element that was being passed into the function as a reference variable
    console.log (template.value); // this will display the value of the element whose handle was being passed into the function as a reference variable
  }

}
