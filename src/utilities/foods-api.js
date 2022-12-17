import sendRequest from "./send-request";

const BASE_URL = '/api/foods';

export async function getFood(search) {
  return sendRequest(`${BASE_URL}/getFood?q=${search}`);
}


