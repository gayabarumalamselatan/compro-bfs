import { endpoint } from "@/constant/endpoint.constant";
import instance from "@/lib/instance";

export const productServices = {
  getProducts: (params?: string) =>
    instance.get(`${endpoint.PRODUCTS}?${params}`),
  getFeaturedMedia: (id: number) =>
    instance.get(`${endpoint.FEATURED_PRODUCTS_MEDIA}?id=${id}`),
};
