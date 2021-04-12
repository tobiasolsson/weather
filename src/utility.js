/* eslint-disable import/prefer-default-export */
const convertUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  const time = `${hour}:${minute}`;

  return time;
};

export { convertUnixTime };
