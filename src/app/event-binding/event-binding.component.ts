import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greeting = '';
  constructor() { }

  ngOnInit(): void {
  }

  HandleClick (event: any) { // without defining the event to be of type any, this will throw an error, so remind it.
    //console.log (event);
    if (this.greeting) {
      this.greeting = ''
    } else {
      this.greeting = 'the button has been clicked';
    }
  }

}
