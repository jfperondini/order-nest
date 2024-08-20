import { fetchGet } from "./fecthData"

export async function getOrderNest () {
  return await fetchGet('orderNest')
}

export default getOrderNest
