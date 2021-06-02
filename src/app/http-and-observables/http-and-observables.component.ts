import { Component, OnInit } from '@angular/core';
import { HttpAndObservablesService } from '../http-and-observables.service';

@Component({
  selector: 'app-http-and-observables',
  templateUrl: './http-and-observables.component.html',
  styleUrls: ['./http-and-observables.component.css']
})
export class HttpAndObservablesComponent implements OnInit {

  public name = 'Sulekha'
  public randomPersonData: any;
  constructor(private _http: HttpAndObservablesService) { }

  ngOnInit(): void {
    this._http.getDataFromHttp (this.name).subscribe ((data) => {
      this.randomPersonData = data;
    })
  }

}
