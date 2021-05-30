import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction-from-parent-to-child',
  templateUrl: './component-interaction-from-parent-to-child.component.html',
  styleUrls: ['./component-interaction-from-parent-to-child.component.css']
})
export class ComponentInteractionFromParentToChildComponent implements OnInit {

  @Input ('passedName') public myName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
