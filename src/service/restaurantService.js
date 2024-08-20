import { fetchGet, fetchPost } from './fecthData'

export async function getListRestaurantCount () {
  return await fetchGet('restaurant/count')
}

export async function getRestaurantByLocation (location) {
  return await fetchPost(`restaurant/location`, location)
}

export async function getRestaurantById (id) {
  return await fetchGet(`restaurant/${id}`)
}


export default { getListRestaurantCount, getRestaurantByLocation, getRestaurantById }
