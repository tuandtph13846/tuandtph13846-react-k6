import { CateType } from "../types/CategoryType";
import instance from "./instance";

export const listCategory = () => {
  const url = `/categorys`;
  return instance.get(url);
};

export const deleteCategory = (id?: string) => {
  const url = `/categorys/${id}`;
  return instance.delete(url);
};
export const addCategory = (category: CateType) => {
  const url = `/categorys`;
  return instance.post(url, category);
};
export const categoryUpdate = (category: CateType) => {
  const url = `/categorys/${category.id}`
  return instance.patch(url,category);
}
export const listCategoryDetail = (id:string) => {
  const url = `/categorys/${id}`
  return instance.get(url)
}
