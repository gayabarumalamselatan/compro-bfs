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
import { ArrowRight, Search, Filter, Check } from "lucide-react";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
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

const featuredProducts = allProducts.filter((product) => product.featured);

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.categoryId === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Header Navigation */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="font-bold text-primary-foreground text-sm">
                  BFS
                </span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-foreground leading-none">
                  BFS
                </span>
                <span className="text-xs text-muted-foreground">
                  Healthcare
                </span>
              </div>
            </Link>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-transparent"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Katalog Produk Lengkap
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Jelajahi rangkaian peralatan kesehatan berkualitas tinggi untuk
              setiap kebutuhan fasilitas kesehatan Anda
            </p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-border bg-background">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cari produk, fitur, atau spesifikasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Category Filters */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Filter Kategori
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                    className="bg-transparent"
                  >
                    Semua Produk
                  </Button>
                  {productCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="bg-transparent"
                    >
                      {category.title}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Results counter */}
              <div className="text-sm text-muted-foreground">
                Ditemukan{" "}
                <span className="font-semibold text-foreground">
                  {filteredProducts.length}
                </span>{" "}
                produk
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {filteredProducts.length > 0 ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                  {selectedCategory
                    ? productCategories.find((c) => c.id === selectedCategory)
                        ?.title
                    : "Katalog Produk"}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group flex flex-col"
                    >
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-40 flex items-center justify-center relative overflow-hidden">
                        <span className="text-6xl">{product.image}</span>
                        {product.featured && (
                          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            Unggulan
                          </div>
                        )}
                      </div>

                      <CardHeader className="flex-grow">
                        <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                          {product.category}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-sm mt-2">
                          {product.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4 pt-0">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">
                            Fitur:
                          </h4>
                          <ul className="space-y-1">
                            {product.features
                              .slice(0, 3)
                              .map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-xs text-muted-foreground"
                                >
                                  <Check className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  {feature}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <Button className="w-full bg-primary hover:bg-secondary text-primary-foreground">
                          Hubungi Sales
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Tidak ada produk yang cocok dengan pencarian Anda.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory(null);
                  }}
                  className="bg-transparent"
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Product Categories Overview */}
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Kategori Lengkap
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {productCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group relative overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <CardHeader className="relative">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground/80 mb-4">
                        {category.details}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Keuntungan:
                        </h4>
                        <ul className="space-y-1">
                          {category.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <Check className="h-3.5 w-3.5 text-primary" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      Lihat Produk
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-300" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 sm:py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Perbandingan Produk Unggulan
            </h2>

            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full">
                <thead className="bg-primary/5 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Produk
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Kategori
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Fitur Utama
                    </th>
                    <th className="px-6 py-4 text-left font-semibold text-foreground">
                      Spesifikasi
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-foreground">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.slice(0, 6).map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-primary/3 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-foreground">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feat, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                            >
                              {feat}
                            </span>
                          ))}
                          {product.features.length > 2 && (
                            <span className="text-xs text-muted-foreground">
                              +{product.features.length - 2}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {product.specifications[0]}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-secondary text-primary-foreground"
                        >
                          Info
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary to-secondary">
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
        </section>
      </main>
    </>
  );
}
