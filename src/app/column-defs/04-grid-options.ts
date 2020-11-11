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
    { field: 'title' },
    { field: 'artist', sortable: false, filter: false },
    { field: 'releaseDate' },
    { field: 'recordLabel' },
    { field: 'certification' },
    { field: 'peakChartPositionUS' },
    { field: 'albumType' },
    { field: 'unitsSold' },
  ],
};
