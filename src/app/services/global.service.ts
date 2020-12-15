import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Angular Training';
  appSubTitle = 'Cloudstaff Day two of Angular';
  ngColor = 'dark'


  subjectName = new Subject();
  colorName = new Subject();
  
  constructor() { }

  toUpperCase(text:any):any{
    return text = text.toUpperCase();
  }
}
