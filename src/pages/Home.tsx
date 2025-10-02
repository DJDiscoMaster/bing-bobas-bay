import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Footer />
      <Watermark />
    </div>
  );
};

export default Home;
