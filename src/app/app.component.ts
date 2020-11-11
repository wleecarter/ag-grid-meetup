import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ExcelExportParams, ProcessRowGroupForExportParams } from 'ag-grid-community';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { gridOptions } from './column-defs/11-default-grouping';

/*
import { gridOptions } from './column-defs/09-export-to-excel';
import { gridOptions } from './column-defs/10-grouping';
import { gridOptions } from './column-defs/11-default-grouping';
 */
@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  public gridOptions = gridOptions;
  public filterFormControl: FormControl = new FormControl('');

  public onGridReady(params): void {
    if (params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      this.initializeFilterControlSubscription();
    }
  }

  public export(): void {
    const params: ExcelExportParams = {
      fileName: 'rush-albums.xlsx',
      sheetName: 'albums',
      columnKeys: this.gridColumnApi.getAllDisplayedColumns(),
      processRowGroupCallback: (callBackParams: ProcessRowGroupForExportParams) =>
        callBackParams.node.key,
    };
    this.gridApi.exportDataAsExcel(params);
  }

  private initializeFilterControlSubscription(): void {
    this.filterFormControl.valueChanges
      .pipe(untilDestroyed(this), debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.gridApi.setQuickFilter(value);
      });
  }
}
