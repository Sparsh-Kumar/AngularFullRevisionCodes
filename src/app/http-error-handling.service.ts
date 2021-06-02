import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPerson } from './Interfaces/personInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlingService {

  public reqUrl = 'https://api.agify.io/?name'
  constructor(private _http: HttpClient) { }

  getData (name = 'sparsh'): Observable <IPerson> {
    return this._http.get <IPerson> (`${this.reqUrl}=${name}`);
  }

}
