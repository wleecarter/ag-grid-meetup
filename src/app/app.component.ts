import { Component } from '@angular/core';

import { gridOptions } from './column-defs/05-getter-formatter-renderer';

/*
import { gridOptions } from './column-defs/05-getter-formatter-renderer';
import { gridOptions } from './column-defs/06-column-filters';
import { gridOptions } from './column-defs/07-dates';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public gridOptions = gridOptions;
}
