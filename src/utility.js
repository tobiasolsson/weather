/* eslint-disable import/prefer-default-export */
const convertUnixTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = `${hour}:${minute}`;

  return time;
};

export { convertUnixTime };
