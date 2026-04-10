"use client";
import { useRouter } from "next/navigation";
import { Marquee } from "../../ui/marquee";
import { useProdukUnggulan } from "./useProdukUnggulan";
import { Spinner } from "@/components/ui/spinner";
import { features } from "@/data/produkUnggulan";

const Produk = () => {
  const router = useRouter();
  const { marquee1, marquee2, isLoading } = useProdukUnggulan();
  return (
    <section id="products" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="text-center mb-16">
          <div className="mb-4 inline-block">
            <div className="text-primary font-semibold">Produk Unggulan</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-semibold text-gray-800 mb-4">
            Solusi Inovatif untuk Layanan Kesehatan
          </h2>
        </div>

        {/* Main Container */}
        <div className="bg-gray-50 rounded-xl flex flex-col lg:flex-row overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-1">Produk Alkes</h2>
              <p className="text-sm font-normal text-gray-600">
                Alat Medis Berkualitas Tinggi
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ">
              {features.map((feature) => (
                <div className="flex flex-col" key={feature.id}>
                  <div className="size-6 text-primary mb-3">{feature.icon}</div>
                  <h3 className="text-sm font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => router.push("/products")}
                className="hover:cursor-pointer text-sm inline-flex items-center justify-center px-6 py-2 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Lihat Produk
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT MARQUEE */}
          <div className="bg-gray-300 lg:w-1/2 hidden sm:flex items-center lg:my-6 rounded-s-2xl min-h-[300px]">
            {isLoading ? (
              <div className="flex w-full justify-center items-center">
                <Spinner className="size-10 text-primary" />
              </div>
            ) : (
              <div className="w-full overflow-hidden">
                <div className="flex flex-col items-center gap-6 py-8 sm:py-12">
                  {marquee1.length > 0 && (
                    <div className="w-full">
                      <Marquee items={marquee1} />
                    </div>
                  )}
                  {marquee2.length > 0 && (
                    <div className="w-full">
                      <Marquee items={marquee2} direction="right" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;
