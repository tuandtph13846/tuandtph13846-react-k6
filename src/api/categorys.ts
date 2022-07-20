import instance from "./instance";

export const listCategory = () => {
  const url = `/categorys`;
  return instance.get(url);
};

export const deleteCategory = (id?: string) => {
  const url = `/categorys/${id}`;
  return instance.delete(url);
};
