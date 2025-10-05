"use client";

import GetStarted from "@/sections/GetStarted";
import HeroSection from "@/sections/HeroSection";
import Services from "@/sections/Services";
import Footer from "@/sections/Footer";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const hideFooter = pathname === "/wallet-connect";

  return (
    <div>
      <HeroSection />
      <Services />
      <GetStarted />
      {!hideFooter && <Footer />}
    </div>
  );
}
