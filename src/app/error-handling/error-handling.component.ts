import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpErrorHandlingService } from '../http-error-handling.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  public personData: any;
  public errorMessage: any;
  constructor(private _httpErrorService: HttpErrorHandlingService) { }

  ngOnInit(): void {
    this._httpErrorService.getData ().subscribe ((personData) => {
      this.personData = personData;
    }, (error: HttpErrorResponse) => {
      this.errorMessage = error.message;
    })
  }

}
