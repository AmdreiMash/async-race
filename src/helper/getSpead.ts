const getSpead = (
  response: { velocity: number; distance: number },
  screenWidth: number
) => {
  const time = Math.floor(response.distance / response.velocity);
  console.log(response.velocity);
  const spead = time / screenWidth;
  return Math.round(spead);
};

export default getSpead;
