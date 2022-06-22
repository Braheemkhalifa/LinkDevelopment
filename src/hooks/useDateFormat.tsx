import { format } from 'fecha';

const useDateFormat = date => {
  return format(new Date(date), 'dddd  Do MMMM  YYYY');
};

export default useDateFormat;
