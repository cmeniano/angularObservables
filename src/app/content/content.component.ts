import { Component, OnInit, OnDestroy } from '@angular/core';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

  titleShop;
  color = '';
  style = ''
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.titleShop = this._globalService.appTitle;
  }

  onClickMe(): void {
    this._globalService.colorName.next(this.color || 'dark');
  }

  ngOnDestroy(): void{
    console.log('a');
      this._globalService.colorName.next('dark');
  }
}
