import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = 'Sparsh Nishkarsh'
  public title = 'generate-components';

  displayChildEvent (event: any) {
    this.title = event;
  }

}
