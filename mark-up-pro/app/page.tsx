import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Connectivity from "./components/Connectivity";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Features />
        <Connectivity />
        <Comparison />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

