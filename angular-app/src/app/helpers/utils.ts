import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() { }

  getUserToken(){
    if(localStorage['token'])
    return localStorage['token'];
    else return ' ';
  }
}
