import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // this is important to import into the service, import "HttpClient" not "HttpClientModule"
import { IPerson } from './Interfaces/personInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAndObservablesService {

  public predictAgeURL = 'https://api.agify.io/?name';
  constructor(private http: HttpClient) { }
  
  // this is the function that will retrieve data from http
  getDataFromHttp (name = 'Nishkarsh'): Observable <IPerson> {
    this.predictAgeURL = `${this.predictAgeURL}=${name}`
    return this.http.get <IPerson> (this.predictAgeURL); // returning the Observable to all the components those who have subscribed to the service 
  }

}
