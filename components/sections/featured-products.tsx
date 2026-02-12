"use client";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Autoclave Sterilizer",
    category: "Operating Theatre",
    description:
      "Sterilisasi peralatan medis dengan teknologi uap bertekanan tinggi",
    features: ["Kapasitas besar", "Otomatis", "Hemat energi"],
    icon: "🔬",
  },
  {
    id: 2,
    name: "Modular Operating Theatre",
    category: "Operating Theatre",
    description:
      "Ruang operasi modular yang dapat disesuaikan dengan kebutuhan",
    features: ["Desain fleksibel", "Standar internasional", "Ergonomis"],
    icon: "🏗️",
  },
  {
    id: 3,
    name: "Integrated IoT Healthcare",
    category: "Support Chapter",
    description: "Sistem terintegrasi IoT untuk monitoring kesehatan real-time",
    features: ["Real-time data", "Analytics", "Secure cloud"],
    icon: "📡",
  },
];

export function FeaturedProducts() {
  const router = useRouter();
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Produk Unggulan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inovasi terdepan dalam teknologi peralatan kesehatan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              {/* Card Content */}
              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>

                {/* Title & Category */}
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => router.push("/products")}
            className="hover:cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-secondary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg"
          >
            View All Products
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
