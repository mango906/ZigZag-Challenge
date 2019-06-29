import moment from 'moment';

const calculateTime = time => {
  const regTime = moment(time).toDate();
  return moment(regTime).format('HH:ss');
};

export default { calculateTime };
