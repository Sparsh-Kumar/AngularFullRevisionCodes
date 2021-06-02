import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }
  
  getServiceData () {

    return [
      { company: 'outgrow', age: 22, post: 'developer' },
      { company: 'Grammerly', age: 23, post: 'developer'},
      { company: 'google', age: 24, post: 'developer' }
    ]

  }

}
