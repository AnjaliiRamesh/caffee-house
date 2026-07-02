import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedTreats from "@/components/sections/FeaturedTreats";
import LoyaltyBanner from "@/components/sections/LoyaltyBanner";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedTreats />
        <LoyaltyBanner />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
