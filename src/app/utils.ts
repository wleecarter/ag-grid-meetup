import * as moment from 'moment';

export const dateComparator = (valueA: string, valueB: string): number => {
  const dateA = convertToMilliseconds(valueA);
  const dateB = convertToMilliseconds(valueB);
  return dateA - dateB;
};

export const convertToMilliseconds = (cellValue: string): number | undefined => {
  if (!cellValue) {
    return undefined;
  }
  const dateParts = cellValue.split('/');
  const year = +dateParts[2];
  const month = +dateParts[0] - 1;
  const day = +dateParts[1];
  const newDate = new Date(year, month, day);

  return moment.isMoment(moment(newDate)) ? newDate.getTime() : undefined;
};
