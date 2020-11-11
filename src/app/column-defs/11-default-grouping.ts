import { formatNumber } from '@angular/common';

import { albumData } from '../album-data';
import { convertToMilliseconds, dateComparator } from '../utils';

export const gridOptions = {
  rowData: albumData,
  groupDefaultExpanded: 1,
  rowGroupPanelShow: 'always',
  suppressCellSelection: true,
  animateRows: true,
  groupHideOpenParents: false,
  autoGroupColumnDef: {
    headerName: '',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      innerRenderer: (params) => params?.value ?? '',
    },
    resizable: true,
  },
  defaultColDef: {
    flex: 1,
    sortable: true,
    filter: true,
    filterParams: {
      suppressAndOrCondition: true,
    },
  },
  columnDefs: [
    {
      field: 'artist',
      sortable: false,
      filter: false,
    },
    {
      headerName: 'Album',
      field: 'title',
      cellRenderer: (params) => {
        if (!params.data) {
          return '';
        }
        if (!params.data.url) {
          return params.data.title;
        }
        return `<a href="${params.data.url}" target="_blank">${params.data.title}</a>`;
      },
    },
    {
      field: 'releaseDate',
      comparator: dateComparator,
      filter: 'agDateColumnFilter',
      filterParams: {
        suppressAndOrCondition: true,
        comparator: (filterValue, cellValue) => {
          return convertToMilliseconds(cellValue) - filterValue.getTime();
        },
      },
    },
    {
      headerName: 'Label',
      field: 'recordLabel',
      enableRowGroup: true,
      getQuickFilterText: () => '',
    },
    {
      field: 'certification',
      rowGroupIndex: 0,
      hide: true,
    },
    {
      field: 'albumType',
      enableRowGroup: true,
    },
    {
      field: 'peakChartPositionUS',
      filter: 'agNumberColumnFilter',
      type: 'rightAligned',
    },
    {
      field: 'unitsSold',
      valueFormatter: (params) => {
        if (!params.data) {
          return '';
        }
        return formatNumber(params.value, 'en-US', '1.0');
      },
      filter: 'agNumberColumnFilter',
      type: 'rightAligned',
    },
  ],
  sideBar: {
    position: 'left',
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: true,
          suppressValues: true,
          suppressPivotMode: true,
        },
      },
    ],
  },
};
