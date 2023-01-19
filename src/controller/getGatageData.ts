import { GARAGE } from "./constants";

const getGarageData = async () => {
  const response = await fetch(`${GARAGE}`);
  const json = await response.json();
  return json;
};

export default getGarageData;
