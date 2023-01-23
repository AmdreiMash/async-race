/* eslint-disable @typescript-eslint/no-unused-vars */
const getSpead = (
  response: { velocity: number; distance: number },
  screenWidth: number
) => {
  const time = Math.floor(response.distance / response.velocity / 1.5);
  return `${time}ms`;
};

export default getSpead;
