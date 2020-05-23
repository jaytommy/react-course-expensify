// Special command to import the real not mock moment library
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};