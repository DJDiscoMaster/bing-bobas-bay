import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-boba.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                🎉 Now Open in Fremont!
              </span>
            </div>
            
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Bing Bing Boba
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Your new favorite bubble tea destination near American in Fremont, CA
            </p>
            
            <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
              Handcrafted with premium ingredients, made fresh daily. Experience the perfect blend of tradition and innovation in every sip.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:scale-105"
              >
                View Menu <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
              >
                Find Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-6"></div>
            <img 
              src={heroImage} 
              alt="Colorful Bing Bing Boba drinks" 
              className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
