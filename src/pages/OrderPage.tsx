import Navigation from "@/components/Navigation";
import Order from "@/components/Order";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

const OrderPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Add padding for fixed navigation */}
        <Order />
      </div>
      <Footer />
      <Watermark />
    </div>
  );
};

export default OrderPage;
