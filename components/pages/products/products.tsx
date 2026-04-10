"use client";

import { Button } from "@/components/ui/button";
import { Search, FilterIcon, Box, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/ui/header";
import useProducts from "./useProduct";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_PATH_URL ?? "";
  const [selectedSubCat, setSelectedSubCat] = useState<string[]>([]);
  const [showAllSub, setShowAllSub] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  const {
    products,
    loadMoreRef,
    productHasNextPage,
    productIsError,
    productIsLoading,
    productFetchNextPage,
    prodctIsFetchingNextPage,
    subCategories,
    subCategoriesIsError,
    categories,
    productIsFetching,
  } = useProducts({
    kategori: selectedCategory,
    sub_kategori: selectedSubCat,
    selectedCategory: selectedCategory,
    search: debouncedSearchQuery,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const searchTriggeredRef = useRef(false);

  useEffect(() => {
    if (searchQuery !== debouncedSearchQuery) {
      searchTriggeredRef.current = true;
    }
  }, [searchQuery, debouncedSearchQuery]);

  useEffect(() => {
    if (!productIsFetching) {
      searchTriggeredRef.current = false;
    }
  }, [productIsFetching]);

  useEffect(() => {
    searchTriggeredRef.current = false;
  }, [selectedCategory, selectedSubCat]);

  console.log("asd", subCategories);
  console.log("asd", selectedSubCat);

  useEffect(() => {
    setSelectedSubCat([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (!loadMoreRef.current || !productHasNextPage) return;

    const checker = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          productFetchNextPage();
        }
      },
      { threshold: 1 },
    );

    checker.observe(loadMoreRef.current);
    return () => checker.disconnect();
  }, [productFetchNextPage, productHasNextPage]);

  if (productIsError) {
    return <p className="p-6 text-center text-destructive">{productIsError}</p>;
  }

  if (subCategoriesIsError) {
    return (
      <p className="p-6 text-center text-destructive">{subCategoriesIsError}</p>
    );
  }

  const listCategory = useMemo(() => {
    return categories ?? [];
  }, [categories]);

  const availableSubCategories = useMemo(() => {
    return subCategories ?? [];
  }, [subCategories]);

  return (
    <main className="min-h-screen bg-white pb-20">
      <Header />

      <section className="container mx-auto max-w-6xl mt-8 sm:mt-15 px-4">
        {/* Hero & Search */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
            Katalog Produk
          </h2>
          <div className="relative w-full sm:max-w-xs">
            {searchQuery !== debouncedSearchQuery ||
            (productIsFetching && searchTriggeredRef.current) ? (
              <Spinner className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
            ) : (
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            )}
            <Input
              className="pl-9 w-full rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Produk..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter */}
          <div className="lg:sticky lg:top-24 self-start order-1">
            <div className="border rounded-xl overflow-hidden bg-white">
              {/* Header Filter */}
              <div
                className="px-4 py-3 bg-gray-50 flex justify-between items-center cursor-pointer lg:cursor-default"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <div className="flex items-center gap-2">
                  <FilterIcon className="text-primary h-4 w-4" />
                  <h2 className="text-sm font-semibold">Filter</h2>
                </div>
                <div className="flex items-center gap-3">
                  {(selectedSubCat.length > 0 || searchQuery) && (
                    <button
                      className="text-xs font-semibold text-primary hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSubCat([]);
                        setSelectedCategory(null);
                        setSearchQuery("");
                      }}
                    >
                      Reset
                    </button>
                  )}
                  <div className="lg:hidden">
                    {isFilterOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* List Filter */}
              <div
                className={`${isFilterOpen ? "block" : "hidden"} lg:block px-4 py-4 max-h-[40vh] lg:max-h-[calc(100vh-300px)] overflow-y-auto border-t lg:border-t-0`}
              >
                {subCategories
                  .slice(0, showAllSub ? subCategories.length : 6)
                  .map((sub) => (
                    <div key={sub.id} className="flex mb-3 items-center gap-3">
                      <Checkbox
                        disabled={productIsLoading}
                        id={sub.name}
                        checked={selectedSubCat.includes(sub.name)}
                        onCheckedChange={(checked) =>
                          setSelectedSubCat((prev) =>
                            checked
                              ? [...prev, sub.name]
                              : prev.filter((v) => v !== sub.name),
                          )
                        }
                      />
                      <label htmlFor={sub.name} className="text-sm">
                        {sub.name}
                      </label>
                    </div>
                  ))}

                {availableSubCategories.length > 6 && (
                  <button
                    onClick={() => setShowAllSub(!showAllSub)}
                    className="hover:cursor-pointer text-sm text-primary font-medium mt-2 flex items-center gap-1"
                  >
                    {showAllSub
                      ? "Sembunyikan"
                      : `+ ${availableSubCategories.length - 6} lainnya`}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PRODUCTS SECTION */}
          <div className="col-span-1 lg:col-span-3 flex flex-col gap-6 order-2">
            {/* Category Filter */}
            <div className="flex overflow-x-auto pb-2 sm:pb-0 scrollbar-hide gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                className={`rounded-xl border-0 hover:cursor-pointer text-sm sm:text-sm ${selectedCategory ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                onClick={() => {
                  setSelectedCategory(null);

                  setSelectedSubCat([]);
                }}
              >
                Semua
              </Button>
              {listCategory.map((cat) => (
                <Button
                  key={cat.id}
                  className={`rounded-xl hover:cursor-pointer border-0 text-sm sm:text-sm ${selectedCategory !== cat.name ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                  variant={
                    selectedCategory === cat.name ? "default" : "outline"
                  }
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSelectedSubCat([]);
                  }}
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            {/* Grid Produk */}
            {productIsLoading ? (
              <div className="bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-center py-10">
                  <div className="flex-column justify-center">
                    <Spinner className="size-20 text-primary mx-auto" />
                    <p className="mt-4">Memuat Data Produk...</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-50 rounded-2xl flex flex-col h-auto sm:h-96 p-4 sm:p-6"
                    >
                      <div className="flex items-center justify-center flex-1 min-h-50 sm:min-h-60">
                        <img
                          className="h-auto max-h-45 sm:max-h-55 w-auto max-w-full object-contain"
                          src={`${IMAGE_BASE_URL}${product.image_url}`}
                          alt={product.image_alt}
                        />
                      </div>

                      <div className="mt-4 sm:mt-auto text-start">
                        <p className="text-xs text-primary font-medium">
                          {product.sub_category}
                        </p>

                        <h2 className="text-sm sm:text-md font-semibold line-clamp-2">
                          {product.nama}
                        </h2>
                      </div>
                    </div>
                  ))
                ) : (
                  <NoProductFound
                    onReset={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                  />
                )}
              </div>
            )}

            <div ref={loadMoreRef}>
              {prodctIsFetchingNextPage && (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                  <Skeleton className="bg-gray-200 rounded-2xl flex flex-col h-auto sm:h-96 p-4 sm:p-6"></Skeleton>
                  <Skeleton className="bg-gray-200 rounded-2xl flex flex-col h-auto sm:h-96 p-4 sm:p-6"></Skeleton>
                  <Skeleton className="bg-gray-200 rounded-2xl flex flex-col h-auto sm:h-96 p-4 sm:p-6"></Skeleton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Komponen Helper untuk tampilan kosong
function NoProductFound({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-20 col-span-full bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
      <div className="flex flex-col items-center gap-3">
        <Box className="h-12 w-12 text-gray-300" />
        <h2 className="text-xl font-bold text-gray-700">
          Produk Tidak Ditemukan
        </h2>
        <p className="text-gray-500 max-w-xs mx-auto">
          Coba ubah kata kunci pencarian atau reset filter Anda.
        </p>
        <Button onClick={onReset} className="mt-4 rounded-full">
          Reset Semua Filter
        </Button>
      </div>
    </div>
  );
}
// function useEffect(arg0: () => (() => void) | undefined, arg1: any[]) {
//   throw new Error("Function not implemented.");
// }

// function fetchNextPage() {
//   throw new Error("Function not implemented.");
// }
