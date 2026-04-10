import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { productServices } from "@/services/products.service";
import { useRef, useState } from "react";
import { Products } from "@/types/products";
import { subCategoriesServices } from "@/services/subcategories.service";

const useProducts = ({
  kategori,
  sub_kategori,
  search,
  selectedCategory,
}: {
  kategori?: string | null;
  sub_kategori?: string[];
  selectedCategory?: string | null;
  search?: string;
}) => {
  const [dataLength, setDataLength] = useState();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchProducts = async ({
    pageParam = 1,
    queryKey,
  }: {
    pageParam?: number;
    queryKey: any;
  }) => {
    const [_key, filters] = queryKey;
    const params = new URLSearchParams();
    params.append("limit", "13");
    params.append("page", String(pageParam));

    if (filters.kategori) {
      params.append("kategori", filters.kategori);
    }

    if (filters.sub_kategori?.length > 0) {
      filters.sub_kategori.forEach((sub: string) => {
        params.append("sub_kategori[]", sub.toLowerCase());
      });
    }

    if (filters.search) {
      params.append("search", filters.search);
    }

    const res = await productServices.getProducts(params.toString());
    setDataLength(res.data.meta.totalPages);
    return res.data;
  };

  const fetchSubCategories = async ({ queryKey }: any) => {
    const [_key, kategori] = queryKey;
    const params = new URLSearchParams();
    if (kategori) {
      params.append("kategori", kategori);
    }
    const res = await subCategoriesServices.getSubCategories(params.toString());
    return res.data.data;
  };

  const productsQuery = useInfiniteQuery({
    queryKey: [
      "products",
      {
        kategori,
        sub_kategori,
        search,
      },
    ],
    queryFn: fetchProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, pages) => {
      const currentLength = lastPage.data.length;
      return currentLength < 10 ? undefined : pages.length + 1;
    },
  });

  const subCategoriesQuery = useQuery({
    queryKey: ["sub-category", selectedCategory],
    queryFn: fetchSubCategories,
    select: (data) => {
      const categoryMap = new Map<number, { id: number; name: string }>();
      const subCategoryMap = new Map<number, { id: number; name: string }>();

      data.forEach((item: any) => {
        if (!categoryMap.has(item.categoryId)) {
          categoryMap.set(item.categoryId, {
            id: item.categoryId,
            name: item.category,
          });
        }

        if (!subCategoryMap.has(item.subCategoryId)) {
          subCategoryMap.set(item.subCategoryId, {
            id: item.subCategoryId,
            name: item.sub_category,
          });
        }
      });

      return {
        categories: Array.from(categoryMap.values()),
        subCategories: Array.from(subCategoryMap.values()),
      };
    },
  });

  const products: Products[] =
    productsQuery.data?.pages.flatMap((page) => page.data) ?? [];

  const categories = subCategoriesQuery.data?.categories ?? [];
  const subCategories = subCategoriesQuery.data?.subCategories ?? [];

  return {
    products,
    productIsLoading: productsQuery.isLoading,
    productHasNextPage: productsQuery.hasNextPage,
    productFetchNextPage: productsQuery.fetchNextPage,
    prodctIsFetchingNextPage: productsQuery.isFetchingNextPage,
    productIsError: productsQuery.isError,
    dataLength,
    loadMoreRef,

    subCategories,
    categories,
    subCategoriesIsError: subCategoriesQuery.isError,
    subCategoriesIsLoading: subCategoriesQuery.isLoading,
    productIsFetching: productsQuery.isFetching,
  };
};

export default useProducts;
