import { WINERS } from "./constants";

async function getWiner(id: string) {
  const response = await fetch(`${WINERS}/${id}`);
  const json = response.json();
  return json;
}

export default getWiner;
