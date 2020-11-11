import { Component } from '@angular/core';

import { albumData } from './album-data';
import { columnDefs } from './column-defs/01-column-defs';

/*
import { columnDefs } from './column-defs/01-column-defs';
import { columnDefs } from './column-defs/02-sort-filter-flex';
import { columnDefs } from './column-defs/03-default-column-def';
import { gridOptions } from './column-defs/04-grid-options';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public rowData = albumData;
  public columnDefs = columnDefs;
  // public defaultColDef = defaultColDef;
  // public gridOptions = gridOptions;
}
