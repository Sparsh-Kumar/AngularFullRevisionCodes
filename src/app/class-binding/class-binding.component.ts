import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public myClass = "text-success";
  public hasError = true;
  
  public multipleClassesConditionally = {
    'text-success': !this.hasError,
    'text-failure': this.hasError,
    'text-special': !this.hasError,
    'text-warning': this.hasError
  }

  constructor() { }

  ngOnInit(): void {
  }

}
