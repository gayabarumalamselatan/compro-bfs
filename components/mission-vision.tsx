import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionVision() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Misi & Visi
          </h2>
          <p className="text-lg text-muted-foreground">
            Komitmen kami terhadap kesehatan dan inovasi
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <Card className="relative overflow-hidden border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

            <CardHeader className="relative">
              <div className="text-4xl mb-3">🎯</div>
              <CardTitle className="text-2xl text-foreground">Visi</CardTitle>
            </CardHeader>

            <CardContent className="relative">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Menjadi mitra distribusi alat kesehatan terpercaya dan terdepan
                di Indonesia, yang berperan strategis dalam menjembatani inovasi
                teknologi medis dengan pelayanan kesehatan nasional melalui
                standar kualitas dan integritas yang tak tertandingi.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="relative overflow-hidden border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

            <CardHeader className="relative">
              <div className="text-4xl mb-3">🚀</div>
              <CardTitle className="text-2xl text-foreground">Misi</CardTitle>
            </CardHeader>

            <CardContent className="relative">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Menyediakan akses alat kesehatan berkualitas tinggi melalui
                sistem distribusi resmi yang menjamin keaslian produk,
                kesinambungan pasokan, dan pelayanan terpercaya untuk mendukung
                praktik kesehatan yang lebih baik.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        {/* <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Nilai-Nilai Inti</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Keaslian', icon: '✓', desc: 'Produk original' },
              { title: 'Kualitas', icon: '⭐', desc: 'Standar internasional' },
              { title: 'Integritas', icon: '🤝', desc: 'Kepercayaan' },
              { title: 'Inovasi', icon: '💡', desc: 'Teknologi terdepan' },
              { title: 'Layanan', icon: '🎯', desc: 'Support profesional' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-gradient-to-b from-blue-50 to-white border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
