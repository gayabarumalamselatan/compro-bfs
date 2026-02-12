import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import Produk from "@/components/sections/produk-unggulan";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { SplashScreen } from "@/components/ui/splash-screen";
import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <SplashScreen />
      <Header />
      <HeroSection />
      <AboutSection />
      <Produk />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
