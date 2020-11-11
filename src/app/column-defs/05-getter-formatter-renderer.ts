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
    // { field: 'title' },
    // { field: 'artist', sortable: false, filter: false },
    {
      field: 'unitsSold',
      valueFormatter: (params) => {
        return formatNumber(params.value, 'en-US', '1.0');
      },
      type: 'rightAligned',
    },
    {
      headerName: 'Artist & Album',
      valueGetter: (params) => {
        return `${params.data.artist} - ${params.data.title}`;
      },
    },
    {
      headerName: 'HTML will not work',
      valueGetter: (params) => {
        if (!params.data.url || !params.data.title) {
          return;
        }
        return `<a href="${params.data.url}" target="_blank">${params.data.title}</a>`;
      },
    },
    {
      headerName: 'Album with Link',
      cellRenderer: (params) => {
        if (!params.data.url || !params.data.title) {
          return;
        }
        return `<a href="${params.data.url}" target="_blank">${params.data.title}</a>`;
      },
    },
    {
      field: 'releaseDate',
    },
    { headerName: 'Label', field: 'recordLabel' },
    { field: 'certification' },
    {
      field: 'peakChartPositionUS',
    },
    { field: 'albumType' },
  ],
};
