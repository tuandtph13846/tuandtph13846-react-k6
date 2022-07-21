import { ProductType } from "../types/ProductType";
import instance from "./instance";


export const listProduct = () => {
    const url = `/products`
    return instance.get(url)
}
export const listProductDetail = (id:string) => {
    const url = `/products/${id}`
    return instance.get(url)
}
export const addProduct = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product);
  };
export const createProduct = (data:any) => {
    const url = `/products`
    return instance.post(url, data)
}
export const deleteProduct = (id:string) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const GetPrWithCategory = (id: string) => {
    const url = `/categories/${id}/products`;
  
    return instance.get(url);
};
export const productUpdate = (product: ProductType) => {
    const url = `/products/${product.id}`
    return instance.patch(url,product);
}

