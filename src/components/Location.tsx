import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Come say hi! We're conveniently located near American in Fremont
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  Near American<br />
                  Fremont, CA 94536
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Hours</h3>
                <p className="text-muted-foreground">
                  Mon-Thu: 11AM - 9PM<br />
                  Fri-Sun: 11AM - 10PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Contact</h3>
                <p className="text-muted-foreground">
                  (510) 123-4567<br />
                  info@bingbingboba.com
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">Find Us on the Map</p>
                <p className="text-muted-foreground">Located near American in Fremont, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
