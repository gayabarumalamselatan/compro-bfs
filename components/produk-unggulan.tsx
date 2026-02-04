"use client";
import { BadgeCheckIcon, ClipboardCheck, Shield, ThumbsUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { Marquee } from "./ui/marquee";

const features = [
  {
    id: 1,
    icon: <BadgeCheckIcon />,
    title: "Tersertifikasi TKDN",
    desc: "Memenuhi standar nasional dan mendukung industri lokal .",
  },
  {
    id: 2,
    icon: <Shield />,
    title: "Reliabilitas",
    desc: "Performa stabil dan andal untuk penggunaan jangka panjang..",
  },
  {
    id: 3,
    icon: <ThumbsUp />,
    title: "Mudah Dioperasikan",
    desc: "Dirancang dengan antarmuka sederhana agar mudah digunakan oleh berbagai pengguna.",
  },
  {
    id: 4,
    icon: <ClipboardCheck />,
    title: "Durabilitas",
    desc: "Material berkualitas tinggi untuk ketahanan dan umur pakai yang lebih lama.",
  },
];

const marquee1 = [
  {
    src: "/images/katalog-bfs/emergency-chapter/isolation-stretcher/ISOLA_15F.png",
    title: "ISOLA 15F",
    desc: "Isolation Stretcher",
  },
  {
    src: "/images/katalog-bfs/nursing-chapter/nursing-bed/SKN_01-12CE.png",
    title: "SKN 01-12CE",
    desc: "Nursing bed",
  },
  {
    src: "/images/katalog-bfs/operating-chapter/renograf/SKN_IR3_E.png",
    title: "SKN IR3 E",
    desc: "Renograf",
  },
  {
    src: "/images/katalog-bfs/support-chapter/examination-table/KA_07_02E.png",
    title: "KA 07 02E",
    desc: "Examination Table",
  },
];

const marquee2 = [
  {
    src: "/images/katalog-bfs/emergency-chapter/transfer-bed/SEGURO_2H.png",
    title: "SEGURO 2H",
    desc: "Transfer Bed",
  },
  {
    src: "/images/katalog-bfs/operating-chapter/gynaecological/SKN_08-02E.png",
    title: "SKN 08-02E",
    desc: "Nursing Bed",
  },
  {
    src: "/images/katalog-bfs/operating-chapter/operating-table/KA_33M.png",
    title: "KA 33M",
    desc: "Operating Table",
  },
  {
    src: "/images/katalog-bfs/operating-chapter/food-trolley/KA_21-01BSS.png",
    title: "KA 21-01BSS",
    desc: "Food Trolley",
  },
];

const Produk = () => {
  const router = useRouter();
  return (
    <section id="products" className="py-20 bg-white">
      <div className="ccontainer mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4 inline-block">
            <div className="text-primary font-semibold">Produk Unggulan</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Solusi Inovatif untuk Layanan Kesehatan
          </h2>
        </div>

        {/* Container */}

        <div className="bg-gray-50 rounded-xl flex py-6">
          <div className="h-full flex flex-col my-auto ps-5">
            <div className="ms-5 mb-7">
              <h2 className="text-2xl font-semibold mb-1">Produk Alkes</h2>
              <p className="text-sm font-normal text-gray-600">
                Alat Medis Berkualitas Tinggi
              </p>
            </div>

            <div className="grid grid-cols-2 mx-5">
              {features.map((feature) => (
                <div className="flex flex-col mb-7" key={feature.id}>
                  <div className="size-6 text-primary mb-3">{feature.icon}</div>
                  <h2 className="text-sm font-semibold mb-1">
                    {feature.title}
                  </h2>
                  <p className="text-xs text-gray-600 pe-3">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="ms-5">
              <button
                onClick={() => router.push("/products")}
                className="hover:cursor-pointer text-sm inline-flex items-center justify-center px-6 py-2 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Lihat Produk
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
          <div className="w-132 bg-gray-300 rounded-s-2xl flex items-center">
            <div>
              <div className="w-132 bg-gray-300 rounded-s-2xl overflow-hidden">
                <div className="flex flex-col items-center gap-6 py-12">
                  <div className="flex justify-center w-full">
                    <Marquee items={marquee1} />
                  </div>

                  <div className="flex justify-center w-full">
                    <Marquee items={marquee2} direction="right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
