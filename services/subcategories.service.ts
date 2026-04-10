import { endpoint } from "@/constant/endpoint.constant";
import instance from "@/lib/instance";

export const subCategoriesServices = {
  getSubCategories: (params: string) =>
    instance.get(`${endpoint.SUB_CATEGORIES}?${params}`),
};
