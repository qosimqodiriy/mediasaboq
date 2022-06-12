import { axiosInstance } from "../axios";
import type { MediaModel } from './model'
export async function getMedia(offset=0, search='', type: number): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`articles`, {
      params: {
        size: 6,
        offset: offset,
        search: search,
        type: type
      }
    }) as { data: {list: MediaModel[], count: number} }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}
