import { Heart, Sparkles, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every drink is crafted with care using premium, fresh ingredients"
    },
    {
      icon: Sparkles,
      title: "Unique Flavors",
      description: "Discover our signature blends and seasonal specials"
    },
    {
      icon: Users,
      title: "Community First",
      description: "A welcoming space for friends, family, and boba lovers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Bing Bing Boba
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're excited to bring a fresh bubble tea experience to the Fremont community. 
            Located conveniently near American, Bing Bing Boba is your go-to spot for 
            premium bubble tea, creative flavors, and a warm, inviting atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
