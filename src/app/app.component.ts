import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { gridOptions } from './column-defs/08-quick-filter';

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

  private initializeFilterControlSubscription(): void {
    this.filterFormControl.valueChanges
      .pipe(untilDestroyed(this), debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.gridApi.setQuickFilter(value);
      });
  }
}
