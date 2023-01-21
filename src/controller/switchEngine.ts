import { ENGANE } from "./constants";

async function switchEngine(id: string, status: string) {
  const response = await fetch(`${ENGANE}?id=${id}&status=${status}`);
  const json = await response.json();
  return json;
}

export default switchEngine;
