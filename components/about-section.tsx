import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Lightbulb, Globe } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: "Standar Kualitas Internasional",
      description:
        "Semua produk telah tersertifikasi dan memenuhi standar internasional tertinggi untuk keamanan dan efektivitas.",
    },
    {
      icon: Users,
      title: "Tim Ahli Berpengalaman",
      description:
        "Didukung oleh profesional healthcare dengan pengalaman puluhan tahun di industri kesehatan nasional.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description:
        "Komitmen kami terhadap riset dan pengembangan memastikan solusi terdepan untuk challenges modern.",
    },
    {
      icon: Globe,
      title: "Jangkauan Nasional",
      description:
        "Melayani fasilitas kesehatan di seluruh nusantara dengan dukungan logistik dan teknis terpercaya.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <div className="text-primary font-semibold">Tentang Kami</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Komitmen Kami untuk Kesehatan Indonesia
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            PT. BFS BINTANG LIMA adalah mitra terpercaya dalam mendistribusikan
            peralatan kesehatan berkualitas tinggi untuk meningkatkan standar
            pelayanan kesehatan di seluruh Indonesia
          </p> */}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left - Text Content */}
          <div className=" bg-gray-50 h-full px-10 flex flex-col items-center rounded-2xl">
            <div className="my-auto flex flex-col gap-9">
              <div>
                <h3 className="text-primary text-xl font-bold mb-3">
                  Sekilas BFS
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  BFS Healthcare memprioritaskan kualitas di atas segalanya,
                  menyadari bahwa setiap peralatan dapat menunjang kenyamanan
                  dan kebutuhan pasien. Melalui kurasi produk yang cermat, kami
                  menjamin presisi, durabilitas, dan keandalan maksimal
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Visi Kami
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Menjadi mitra distribusi alat kesehatan terpercaya dan
                  terdepan di Indonesia, yang berperan strategis dalam
                  menjembatani inovasi teknologi medis dengan pelayanan
                  kesehatan nasional melalui standar kualitas dan integritas
                  yang tak tertanding
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Misi Kami
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Menyediakan akses alat kesehatan berkualitas tinggi melalui
                  sistem distribusi resmi yang menjamin keaslian produk,
                  kesinambungan pasokan, dan pelayanan terpercaya
                </p>
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Nilai-Nilai Inti
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <strong>Integritas</strong> - Transparansi dan kejujuran
                    dalam setiap transaksi bisnis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <strong>Kualitas</strong> - Standar tertinggi dalam produk
                    dan layanan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <strong>Inovasi</strong> - Selalu mencari solusi terbaik
                    untuk tantangan kesehatan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    <strong>Kepedulian</strong> - Komitmen pada kesejahteraan
                    dan kesehatan masyarakat
                  </span>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Right - Visual Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
                >
                  <CardHeader className="pb-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        {/* <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 sm:p-12 border border-primary/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Perjalanan Kami
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-2">
                  01
                </div>
                <div className="h-20 w-1 bg-gradient-to-b from-primary to-transparent" />
              </div>
              <div className="pb-8">
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Awal Berdiri
                </h4>
                <p className="text-muted-foreground">
                  PT. BFS BINTANG LIMA didirikan dengan visi untuk menjadi
                  jembatan antara inovasi teknologi medis dan kebutuhan
                  kesehatan di Indonesia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-2">
                  02
                </div>
                <div className="h-20 w-1 bg-gradient-to-b from-primary to-transparent" />
              </div>
              <div className="pb-8">
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Ekspansi & Pertumbuhan
                </h4>
                <p className="text-muted-foreground">
                  Melalui dedikasi dan kepercayaan dari mitra, kami terus
                  berkembang melayani ratusan fasilitas kesehatan dengan produk
                  dan layanan terbaik.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-2">
                  03
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Visi Masa Depan
                </h4>
                <p className="text-muted-foreground">
                  Terus berinovasi dan berkembang untuk menjadi pemimpin
                  industri distribusi alat kesehatan yang mendukung peningkatan
                  kualitas kesehatan nasional.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
