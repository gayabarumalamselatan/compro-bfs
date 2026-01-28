import { Button } from "@/components/ui/button";
import Link from "next/link";
import Aurora from "./react-bits/Aurora";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-linear-to-b from-blue-50 to-white pt-0 pb-24 sm:pt-28 sm:pb-32">
      {/* Grid Background */}

      <div className="absolute inset-0 z-0 overflow-hidden h-full">
        <div className="absolute inset-0 backdrop-blur-[80px] bg-white/20 z-10" />
        <div className="absolute inset-0 opacity-30">
          <Aurora
            colorStops={["#002278", "#002278", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={2}
          />
        </div>
        {/* Overlay linear untuk kontras */}
        <div className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-blue-50/80 z-5" />
      </div>

      <div className="container pt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-block">
            <div className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20">
              Pionir Inovasi Kesehatan di Indonesia
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Mitra Distribusi{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Alat Kesehatan Terpercaya
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
            Jembatani inovasi teknologi medis dengan pelayanan kesehatan
            nasional melalui standar kualitas dan integritas yang tak
            tertandingi
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#products">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary hover:cursor-pointer text-primary-foreground w-full sm:w-auto rounded-xl"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-primary hover:text-primary hover:cursor-pointer hover:bg-gray-100 bg-background backdrop-blur rounded-xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                4+
              </div>
              <p className="text-sm text-muted-foreground">
                Product Categories
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                100%
              </div>
              <p className="text-sm text-muted-foreground">
                Authentic Products
              </p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                100%
              </div>
              <p className="text-sm text-muted-foreground">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes movelinear {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-linear(0deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent),
            linear-linear(90deg, transparent 24%, rgba(59, 130, 246, 0.05) 25%, rgba(59, 130, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.05) 75%, rgba(59, 130, 246, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
