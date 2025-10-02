import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Menu />
      <Order />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
