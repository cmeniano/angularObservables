import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Angular';
  subtitle = 'Angular Subtitle';
  style = 'dark';


  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
    
   this.title = this._globalService.toUpperCase(this._globalService.appTitle)
   this.subtitle = this._globalService.appSubTitle;

   this._globalService.colorName.subscribe(
    (newColor:any) => {
      this.style = newColor || this._globalService.toUpperCase(this._globalService.ngColor);

    }
  );
  }




}


