import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-services-and-http',
  templateUrl: './services-and-http.component.html',
  styleUrls: ['./services-and-http.component.css']
})
export class ServicesAndHttpComponent implements OnInit {

  public testData: any;
  constructor(private _testService: TestServiceService) { }

  ngOnInit(): void {
    this.testData = this._testService.getServiceData ()
  }

}
