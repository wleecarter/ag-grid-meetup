import { formatNumber } from '@angular/common';

import { albumData } from '../album-data';

export const gridOptions = {
  rowData: albumData,
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
        if (!params.data.url || !params.data.title) {
          return;
        }
        return `<a href="${params.data.url}" target="_blank">${params.data.title}</a>`;
      },
    },
    {
      field: 'releaseDate',
      filter: 'agDateColumnFilter',
    },
    {
      headerName: 'Label',
      field: 'recordLabel',
    },
    {
      field: 'certification',
    },
    {
      field: 'peakChartPositionUS',
      filter: 'agNumberColumnFilter',
    },
    {
      field: 'albumType',
    },
    {
      field: 'unitsSold',
      valueFormatter: (params) => {
        return formatNumber(params.value, 'en-US', '1.0');
      },
      type: 'rightAligned',
      filter: 'agNumberColumnFilter',
    },
  ],
};
