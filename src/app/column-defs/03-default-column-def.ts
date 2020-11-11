export const columnDefs = [
  { field: 'title' },
  { field: 'artist', sortable: false, filter: false },
  { field: 'releaseDate' },
  { field: 'recordLabel' },
  { field: 'certification' },
  { field: 'albumType' },
  { field: 'peakChartPositionUS' },
  { field: 'unitsSold' },
];

export const defaultColDef = {
  flex: 1,
  sortable: true,
  filter: true,
};
