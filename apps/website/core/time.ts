import { differenceInMonths, format, parse } from 'date-fns';

const START = new Date('2015-10-01');

export const experienceTime = (): string => {
  const now = new Date();
  const months = differenceInMonths(now, START);
  const halfFlooredYears = Math.floor((months / 12) * 2) / 2;
  return String(halfFlooredYears);
};

export const formatYearMonth = (yearMonth: string): string => {
  const reference = new Date('2000-01-01T00:00:00.000Z');
  console.log('yearMonth: ', yearMonth);
  const date = parse(yearMonth, 'yyyy-MM', reference);
  console.log('date: ', date);
  return format(date, 'MMM yyyy');
};
