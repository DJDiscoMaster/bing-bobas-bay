import Navigation from "@/components/Navigation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

const LocationPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding for fixed navigation */}
        <Location />
      </div>
      <Footer />
      <Watermark />
    </div>
  );
};

export default LocationPage;
