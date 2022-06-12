import { axiosInstance } from "../axios";
import type { AuthorModel} from './model'
export async function getAuthors(): Promise<[any, any]> {
  try {
    const response = await axiosInstance.get(`authors`, {
      // params: {
      //   size: 12,
      //   offset: offset,
      //   search: search
      // }
    }) as { data: {list: AuthorModel[], count: number} }
    return [null, response.data]
  }
  catch(error) {
    return [error, null]
  }
}
