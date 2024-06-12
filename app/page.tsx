import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimoni from "@/components/Testimoni";
import TextBanner from "@/components/TextBanner";
import Trainer from "@/components/Trainer";

export default function Home() {
  return (
    <main>
      <div className="h-full">
        <Navbar />
        <Hero />
        <TextBanner />
        <Contact />
        <Trainer />
        <Testimoni />
        <Footer />
      </div>
    </main>
  );
}
