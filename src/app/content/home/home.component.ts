import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = '';

  constructor(private _globalService:GlobalService) { }

  ngOnInit(): void {
  }

  onClickMe(): void {
    this._globalService.colorName.next(this.color || 'dark');
  }


}
