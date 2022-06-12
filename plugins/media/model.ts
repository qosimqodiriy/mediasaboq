import { ObjectModel } from "../types";

export interface MediaModel {
    id?: number,
    type: number,
    lang: string,
    title: string,
    description: string,
    body: string,
    image: string,
    category: ObjectModel,
    isTop: boolean,
    author: ObjectModel,
    isMain: boolean,
    slug: string,
    seoTitle: string,
    seoMeta: string,
    seoDesc: string,
    active: boolean,
    deleted: boolean,
}
