"use client";

import { Button } from "@/components/ui/button";
import { Search, FilterIcon, Box } from "lucide-react";
import { useState, useMemo } from "react";
import { allProductsKatalog } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/ui/header";

export default function ProductsPage() {
  const [selectedSubCat, setSelectedSubCat] = useState<string[]>([]);
  const [showAllSub, setShowAllSub] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(selectedSubCat);

  const listCategory = [
    ...new Set(allProductsKatalog.map((product) => product.category)),
  ].map((category) => ({ label: category }));

  const availableSubCategories = useMemo(() => {
    const filtered = selectedCategory
      ? allProductsKatalog.filter((p) => p.category === selectedCategory)
      : allProductsKatalog;

    return Array.from(new Set(filtered.map((p) => p.subCategory)));
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return allProductsKatalog.filter((product) => {
      const matchCategory =
        !selectedCategory || product.category === selectedCategory;

      const matchSubCategory =
        selectedSubCat.length === 0 ||
        selectedSubCat.includes(product.subCategory);

      const matchSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchCategory && matchSubCategory && matchSearch;
    });
  }, [selectedCategory, selectedSubCat, searchQuery]);

  return (
    <>
      <main className="min-h-screen bg-white">
        <Header />

        <section>
          <div className="container mx-auto max-w-6xl mt-15 px-4 sm:px-6">
            {/* Hero Section */}

            <div className="mb-15 flex flex-col sm:flex-row justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center sm:text-left">
                Katalog Produk
              </h2>

              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-9 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari Produk"
                />
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Filter - Mobile Collapsible */}
              <div className="lg:sticky lg:top-24 self-start order-2 lg:order-1">
                <div className="border rounded-xl">
                  <div className="px-4 py-3 bg-gray-100 rounded-t-xl flex justify-between items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <FilterIcon className="text-primary h-5 w-5" />
                      <h2 className="text-sm font-semibold">Filter</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedSubCat.length > 0 || searchQuery ? (
                        <button
                          className="text-sm font-medium hover:cursor-pointer text-primary"
                          onClick={() => {
                            setSelectedSubCat([]);
                            setSelectedCategory(null);
                            setSearchQuery("");
                          }}
                        >
                          Reset
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div className="px-4 py-3 max-h-[50vh] lg:max-h-[calc(100vh-300px)] overflow-y-auto">
                    {availableSubCategories
                      .slice(0, showAllSub ? availableSubCategories.length : 5)
                      .map((sub) => (
                        <div key={sub} className="flex mb-3 items-center gap-3">
                          <Checkbox
                            id={sub}
                            checked={selectedSubCat.includes(sub)}
                            onCheckedChange={(checked) =>
                              setSelectedSubCat((prev) =>
                                checked
                                  ? [...prev, sub]
                                  : prev.filter((v) => v !== sub),
                              )
                            }
                          />
                          <label
                            htmlFor={sub}
                            className="text-sm cursor-pointer"
                          >
                            {sub}
                          </label>
                        </div>
                      ))}

                    {availableSubCategories.length > 5 && (
                      <button
                        onClick={() => setShowAllSub(!showAllSub)}
                        className="text-sm text-primary hover:text-primary/80 font-medium mt-2 flex items-center gap-1 transition-colors"
                      >
                        {showAllSub ? (
                          <>
                            <span className="hover:cursor-pointer">
                              Tampilkan lebih sedikit
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="hover:cursor-pointer">
                              Tampilkan {availableSubCategories.length - 5}{" "}
                              lainnya
                            </span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="col-span-1 lg:col-span-3 flex flex-col gap-4 lg:gap-6 order-1 lg:order-2">
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <Button
                    variant={!selectedCategory ? "default" : "outline"}
                    className={`rounded-xl hover:cursor-pointer text-sm sm:text-base ${selectedCategory ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubCat([]);
                    }}
                  >
                    Semua
                  </Button>

                  {listCategory.map((cat) => (
                    <Button
                      key={cat.label}
                      className={`rounded-xl hover:cursor-pointer text-sm sm:text-base ${selectedCategory !== cat.label ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                      variant={
                        selectedCategory === cat.label ? "default" : "outline"
                      }
                      onClick={() => {
                        setSelectedCategory(cat.label);
                        setSelectedSubCat([]);
                      }}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl flex flex-col h-auto sm:h-96 p-4 sm:p-6"
                      >
                        <div className="flex items-center justify-center flex-1 min-h-[200px] sm:min-h-[240px]">
                          <img
                            className="h-auto max-h-[180px] sm:max-h-[220px] w-auto max-w-full object-contain"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>

                        <div className="mt-4 sm:mt-auto text-start">
                          <p className="text-xs text-primary font-medium">
                            {product.subCategory}
                          </p>
                          <h2 className="text-sm sm:text-md font-semibold line-clamp-2">
                            {product.name}
                          </h2>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 sm:py-12 col-span-1 sm:col-span-2 lg:col-span-3">
                      <div className="flex flex-col items-center gap-3">
                        <div className="border p-2 rounded-lg inline-flex">
                          <Box className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h2 className="text-lg font-semibold">
                          Produk Tidak Ditemukan
                        </h2>
                        <p className="text-muted-foreground mb-4 text-sm">
                          Tidak ada produk yang cocok dengan pencarian Anda.
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory(null);
                          }}
                          className="bg-transparent hover:bg-teal-700 hover:cursor-pointer text-sm"
                        >
                          Reset Filter
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
