import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    id: "nursing",
    title: "Nursing Chapter",
    description:
      "Peralatan kesehatan untuk keperawatan pasien dengan standar internasional",
    color: "from-blue-500 to-blue-600",
    icon: "🏥",
  },
  {
    id: "operating",
    title: "Operating Chapter",
    description: "Solusi lengkap ruang operasi modern dengan teknologi terkini",
    color: "from-cyan-500 to-cyan-600",
    icon: "⚕️",
  },
  {
    id: "emergency",
    title: "Emergency Chapter",
    description: "Peralatan gawat darurat untuk respon cepat dan efektif",
    color: "from-indigo-500 to-indigo-600",
    icon: "🚑",
  },
  {
    id: "support",
    title: "Support Chapter",
    description:
      "Sistem dukungan dan alat pendukung untuk operasional fasilitas kesehatan",
    color: "from-violet-500 to-violet-600",
    icon: "🔧",
  },
];

export function ProductCategories() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kategori Produk
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan solusi lengkap untuk berbagai kebutuhan kesehatan
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
              />

              <CardHeader className="relative">
                <div className="text-4xl mb-3">{category.icon}</div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  {category.description}
                </CardDescription>
              </CardContent>

              {/* Hover Border */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
