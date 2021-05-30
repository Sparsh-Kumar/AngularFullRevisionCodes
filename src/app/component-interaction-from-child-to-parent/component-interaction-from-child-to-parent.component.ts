import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction-from-child-to-parent',
  templateUrl: './component-interaction-from-child-to-parent.component.html',
  styleUrls: ['./component-interaction-from-child-to-parent.component.css']
})
export class ComponentInteractionFromChildToParentComponent implements OnInit {

  @Output () public childEvent = new EventEmitter ()

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent () {
    this.childEvent.emit ('this is the emmited value');
  }

}
