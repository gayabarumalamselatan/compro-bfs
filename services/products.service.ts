import { endpoint } from "@/constant/endpoint.constant";
import instance from "@/lib/instance";

export const productServices = {
  getProducts: (params?: string) =>
    instance.get(`${endpoint.PRODUCTS}?${params}`),
};
