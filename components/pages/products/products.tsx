"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Search,
  Filter,
  Check,
  FilterIcon,
  Box,
} from "lucide-react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { allProductsKatalog } from "@/data/products";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
// import Loading from "./loading";

const productCategories = [
  {
    id: "nursing",
    title: "Nursing Chapter",
    description:
      "Peralatan kesehatan untuk keperawatan pasien dengan standar internasional",
    details:
      "Kami menyediakan rangkaian lengkap peralatan nursing yang dirancang untuk meningkatkan kualitas perawatan pasien. Setiap produk telah melalui standar kontrol kualitas internasional dan disesuaikan dengan kebutuhan fasilitas kesehatan Indonesia.",
    color: "from-blue-500 to-blue-600",
    icon: "🏥",
    benefits: [
      "Perawatan pasien berkualitas",
      "Standard internasional",
      "Monitoring vital signs",
      "Comfort pasien maksimal",
    ],
  },
  {
    id: "operating",
    title: "Operating Theatre",
    description: "Solusi lengkap ruang operasi modern dengan teknologi terkini",
    details:
      "Dengan teknologi terdepan, kami menyediakan solusi ruang operasi yang komprehensif. Dari peralatan bedah hingga sistem sterilisasi, semua dirancang untuk efisiensi maksimal dan keselamatan pasien.",
    color: "from-cyan-500 to-cyan-600",
    icon: "⚕️",
    benefits: [
      "Sterilisasi sempurna",
      "Imaging terintegrasi",
      "Efisiensi operasi",
      "Safety protocols",
    ],
  },
  {
    id: "emergency",
    title: "Emergency Chapter (EGD)",
    description: "Peralatan gawat darurat untuk respon cepat dan efektif",
    details:
      "Sistem peralatan gawat darurat kami memastikan respon cepat dalam situasi kritis. Dirancang untuk ketahanan dan reliabilitas tinggi dengan dukungan teknis 24/7.",
    color: "from-indigo-500 to-indigo-600",
    icon: "🚑",
    benefits: [
      "Respon cepat",
      "Ketahanan tinggi",
      "Support 24/7",
      "Reliabilitas maksimal",
    ],
  },
  {
    id: "support",
    title: "Support Chapter",
    description:
      "Sistem dukungan dan alat pendukung untuk operasional fasilitas kesehatan",
    details:
      "Peralatan pendukung operasional fasilitas kesehatan mencakup sistem sterilisasi, manajemen limbah medis, dan solusi infrastruktur kesehatan lainnya.",
    color: "from-violet-500 to-violet-600",
    icon: "🔧",
    benefits: [
      "Sterilisasi limbah",
      "Manajemen inventory",
      "Efisiensi operasional",
      "Compliance standar",
    ],
  },
];

const allProducts = [
  {
    name: "Autoclave Sterilizer Pro",
    category: "Operating Theatre",
    categoryId: "operating",
    description:
      "Sistem sterilisasi berteknologi tinggi untuk sterilisasi instrumen medis",
    features: [
      "Kapasitas 100L",
      "Siklus 45 menit",
      "Hemat energi 30%",
      "Monitoring digital",
    ],
    specifications: [
      "Suhu max 135°C",
      "Pressure 3 bar",
      "Auto-shutdown",
      "IP67 rating",
    ],
    price: "Custom Quote",
    featured: true,
    image: "🔬",
  },
  {
    name: "Modular Operating Theatre",
    category: "Operating Theatre",
    categoryId: "operating",
    description:
      "Ruang operasi modular yang dapat disesuaikan dengan kebutuhan fasilitas",
    features: [
      "Desain modular fleksibel",
      "Ventilasi superior",
      "Imaging terintegrasi",
      "ISO 14644 Class 6",
    ],
    specifications: [
      "Ukuran custom",
      "Tekanan positif",
      "LED lighting system",
      "Equipment integration",
    ],
    price: "Custom Quote",
    featured: true,
    image: "🏗️",
  },
  {
    name: "Patient Monitor Series",
    category: "Nursing Chapter",
    categoryId: "nursing",
    description: "Monitor pasien multi-parameter untuk continuous monitoring",
    features: [
      "ECG monitoring",
      "SpO2 tracking",
      "Temperature sensor",
      "Wireless connectivity",
    ],
    specifications: [
      "12-inch display",
      "Battery 8 hours",
      "Data logging",
      "Alarm system",
    ],
    price: "Custom Quote",
    featured: false,
    image: "💓",
  },
  {
    name: "Emergency Response Cart",
    category: "Emergency Chapter (EGD)",
    categoryId: "emergency",
    description: "Keranjang darurat lengkap dengan peralatan resusitasi",
    features: [
      "Fully equipped",
      "Mobile & portable",
      "Organized drawers",
      "Defibrillator ready",
    ],
    specifications: [
      "Steel construction",
      "Locking wheels",
      "Compact design",
      "Drug compartment",
    ],
    price: "Custom Quote",
    featured: false,
    image: "🚨",
  },
  {
    name: "Waste Management System",
    category: "Support Chapter",
    categoryId: "support",
    description: "Sistem manajemen limbah medis terintegrasi",
    features: [
      "Segregation containers",
      "Tracking system",
      "Compliance reports",
      "Space efficient",
    ],
    specifications: [
      "Kapasitas 240L",
      "Color-coded",
      "Bio-hazard compliant",
      "Easy disposal",
    ],
    price: "Custom Quote",
    featured: false,
    image: "♻️",
  },
  {
    name: "Surgical Light Systems",
    category: "Operating Theatre",
    categoryId: "operating",
    description: "Sistem pencahayaan bedah berteknologi LED",
    features: [
      "LED technology",
      "Shadow-free",
      "Adjustable intensity",
      "Long lifespan",
    ],
    specifications: [
      "Color temp 4000K",
      "Illumination 160000 lux",
      "Arm length 120cm",
      "Ergonomic design",
    ],
    price: "Custom Quote",
    featured: false,
    image: "💡",
  },
];

const listCategory = [
  {
    label: "Emergency Chapter",
  },
  {
    label: "Operating Chapter",
  },
  {
    label: "Support Chapter",
  },
  {
    label: "Nursing Chapter",
  },
];

const featuredProducts = allProducts.filter((product) => product.featured);

export default function ProductsPage() {
  const [selectedSubCat, setSelectedSubCat] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(selectedSubCat);

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

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedSubCat((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value),
    );
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header Navigation */}
        <header className="sticky top-0 z-40 shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" className="w-10 h-10" />
                <div className="hidden sm:flex flex-col">
                  <span className="font-bold text-primary leading-none">
                    BFS
                  </span>
                  <span className="text-xs text-primary">Healthcare</span>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                href={"/"}
                className="text-sm font-medium bg-primary py-2 px-5 rounded-xl text-white"
              >
                Kembali ke Beranda
              </Link>
            </nav>
          </div>
        </header>

        <section>
          <div className="container mx-auto max-w-6xl mt-10">
            {/* Hero Section */}
            <div className="mb-5 flex flex-row justify-between">
              <h2 className="text-4xl font-medium text-gray-800">
                Katalog Produk
              </h2>

              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari Produk"
                />
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-4 gap-4">
              {/* filter */}
              <div className="sticky top-24 self-start">
                <div className="border rounded-xl">
                  <div className="px-4 py-3 bg-gray-100 rounded-t-xl flex justify-between items-center">
                    <div className="flex flex-row gap-2 items-center">
                      <FilterIcon className="text-primary h-5 w-5" />
                      <h2 className="text-xs font-semibold">Filter</h2>
                    </div>
                    {selectedSubCat.length > 0 || searchQuery ? (
                      <button
                        className="text-xs font-medium hover:cursor-pointer"
                        onClick={() => {
                          setSelectedSubCat([]);
                          setSelectedCategory(null);
                          setSearchQuery("");
                        }}
                      >
                        Reset
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="px-4 py-3 max-h-[calc(100vh-300px)] overflow-y-auto">
                    {availableSubCategories.map((sub) => (
                      <div key={sub} className="flex mb-2 items-center gap-3">
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
                        <label htmlFor={sub} className="text-sm cursor-pointer">
                          {sub}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-3 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={!selectedCategory ? "default" : "outline"}
                    className={`rounded-xl hover:cursor-pointer ${selectedCategory ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubCat([]);
                    }}
                  >
                    All
                  </Button>

                  {listCategory.map((cat) => (
                    <Button
                      key={cat.label}
                      className={`rounded-xl hover:cursor-pointer ${selectedCategory !== cat.label ? "hover:bg-primary" : "hover:bg-teal-700"}`}
                      variant={
                        selectedCategory === cat.label ? "default" : "outline"
                      }
                      onClick={() => {
                        setSelectedCategory(cat.label);
                        setSelectedSubCat([]); // reset sub category
                      }}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-2xl flex flex-col h-96 p-6"
                      >
                        <div />

                        <div className="flex items-center justify-center flex-1">
                          <img className="h-60" src={product.image} />
                          {/* <div className="text-9xl">{product.image}</div> */}
                        </div>

                        <div className="mt-auto text-start">
                          <p className="text-xs text-primary font-medium">
                            {product.subCategory}
                          </p>
                          <h2 className="text-md font-semibold">
                            {product.name}
                          </h2>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center  py-12 col-span-3">
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
                          className="bg-transparent hover:bg-teal-700 hover:cursor-pointer"
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

        {/* CTA Section */}
        {/* <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Siap Meningkatkan Fasilitas Kesehatan Anda?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Konsultasikan kebutuhan Anda dengan tim ahli kami dan dapatkan
              solusi yang paling sesuai
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-primary font-semibold"
              >
                Hubungi Sales Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Request Brochure
              </Button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
