import { SplashScreen } from "@/components/splash-screen";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductCategories } from "@/components/product-categories";
import { FeaturedProducts } from "@/components/featured-products";
import { MissionVision } from "@/components/mission-vision";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import Produk from "@/components/produk-unggulan";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Header />
      <HeroSection />
      <AboutSection />
      <Produk />
      {/* <ProductCategories /> */}
      {/* <FeaturedProducts /> */}
      {/* <MissionVision /> */}
      <ContactSection />
      <Footer />
    </>
  );
}
