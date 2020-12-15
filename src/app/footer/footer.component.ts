import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  style = 'dark';
  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
    this._globalService.colorName.subscribe(
      (newColor:any) => {
        this.style = newColor || this._globalService.toUpperCase(this._globalService.ngColor);
  
      }
    );
  }

}
