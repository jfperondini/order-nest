import { fetchPost } from './fecthData'

export async function getMenuByIdRestaurant (idRestaurante) {
  return await fetchPost(`menu`, idRestaurante)
}

export default getMenuByIdRestaurant
