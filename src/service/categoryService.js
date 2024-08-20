import { fetchPost } from "./fecthData"

export async function getListCategoryById (uniqueCategory) {
  return await fetchPost(`category`, uniqueCategory)
}

export default getListCategoryById
