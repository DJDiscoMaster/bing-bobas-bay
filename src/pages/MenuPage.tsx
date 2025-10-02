import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const MenuPage = () => {
  const [openSections, setOpenSections] = useState<string[]>(["Milk Teas"]);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const menuSections = [
    {
      name: "Milk Teas",
      items: [
        { name: "Premium Black Milk Tea", price: "$6.00", description: "Black tea, jasmin green tea, or oolong tea" },
        { name: "Premium Jasmin Green Milk Tea", price: "$6.00", description: "Fragrant jasmin green tea" },
        { name: "Premium Oolong Milk Tea", price: "$6.00", description: "Smooth oolong tea" },
        { name: "UBE Taro Milk Tea", price: "$6.50", description: "Creamy purple yam" },
        { name: "Thai Milk Tea", price: "$6.50", description: "Rich and sweet" },
        { name: "Dirty Boba", price: "$6.50", description: "Brown sugar special" },
        { name: "Taro Milk Tea", price: "$6.50", description: "Classic taro flavor" },
        { name: "Oreo Cookie Puff", price: "$7.00", description: "Cookies and cream delight" }
      ]
    },
    {
      name: "Fruit Teas",
      items: [
        { name: "Strawberry Fruit Tea", price: "$6.50", description: "Fresh strawberry" },
        { name: "Mango Fruit Tea", price: "$6.50", description: "Tropical mango" },
        { name: "Lychee Fruit Tea", price: "$6.50", description: "Sweet lychee" },
        { name: "Passion Fruit Tea", price: "$6.50", description: "Tangy passion fruit" }
      ]
    },
    {
      name: "Matcha & Cloud Series",
      items: [
        { name: "Original Matcha Latte", price: "$6.00", description: "Premium Japanese matcha" },
        { name: "Cloud Matcha", price: "$7.00", description: "Matcha with cloud foam" },
        { name: "Banana Cloud Matcha", price: "$7.00", description: "Banana matcha fusion" },
        { name: "Mango Matcha", price: "$7.50", description: "Tropical matcha blend" },
        { name: "Strawberry Matcha", price: "$7.50", description: "Berry matcha creation" },
        { name: "Injeolmi Cloud", price: "$7.00", description: "Korean rice cake flavor" },
        { name: "Black Sesame Cloud", price: "$7.00", description: "Nutty sesame delight" },
        { name: "Real Strawberry Cloud", price: "$7.00", description: "Fresh strawberry cloud" }
      ]
    },
    {
      name: "Coffee & Smoothies",
      items: [
        { name: "Americano", price: "$4.50", description: "Hot (12 oz) / Ice (16oz)" },
        { name: "Caffe Latte", price: "$5.50", description: "Hot (12 oz) / Ice (16oz)" },
        { name: "Cold Brew", price: "$6.00", description: "Smooth cold coffee" },
        { name: "Fresh Mango Smoothie", price: "$7.00", description: "Blended mango" },
        { name: "Fresh Strawberry Smoothie", price: "$7.00", description: "Blended strawberry" },
        { name: "Fresh Strawberry Banana", price: "$7.00", description: "Mixed berry smoothie" }
      ]
    },
    {
      name: "Snacks & Appetizers",
      items: [
        { name: "French Fries (Regular)", price: "$7.00", description: "Crispy golden fries" },
        { name: "French Fries (Bingbing Style)", price: "$8.50", description: "Our signature seasoning" },
        { name: "Pop Corn Chicken", price: "$8.50", description: "Bite-sized crispy chicken" },
        { name: "Fried Chicken Wings", price: "$9.00", description: "Juicy chicken wings" },
        { name: "Sausage & Rice Cake Skewer", price: "$5.50", description: "Korean street food" },
        { name: "Fried Tofu", price: "$7.50", description: "Crispy tofu bites" },
        { name: "Fried Dumpling", price: "$7.50", description: "Pan-fried dumplings" },
        { name: "Cheese Stick", price: "$7.50", description: "Melty mozzarella sticks" }
      ]
    },
    {
      name: "Desserts & Specials",
      items: [
        { name: "Ingeolmi Croffle", price: "$7.50", description: "Korean waffle dessert" },
        { name: "Strawberry Croffle", price: "$7.50", description: "Sweet strawberry waffle" },
        { name: "Matcha Croffle", price: "$7.50", description: "Matcha waffle treat" },
        { name: "Oreo Croffle", price: "$7.50", description: "Cookies & cream waffle" },
        { name: "Ingeolmi Shaved Ice", price: "$8.00", description: "Korean dessert" },
        { name: "Mango Shaved Ice", price: "$8.50", description: "Tropical shaved ice" },
        { name: "Strawberry Shaved Ice", price: "$8.50", description: "Berry shaved ice" }
      ]
    },
    {
      name: "Combo Deals",
      items: [
        { name: "Any Milk Tea + Popcorn Chicken", price: "$11.50", description: "Perfect combo" },
        { name: "Any Milk Tea + Bingbing Fries", price: "$11.50", description: "Tea & fries combo" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Menu
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully crafted selection of bubble tea drinks, delicious snacks, and specialty beverages
              </p>
            </div>

            {/* Menu Sections */}
            <div className="space-y-4">
              {menuSections.map((section) => (
                <Card key={section.name} className="border-border overflow-hidden">
                  <Collapsible 
                    open={openSections.includes(section.name)}
                    onOpenChange={() => toggleSection(section.name)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          {/* Placeholder image */}
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
                          </div>
                          <div className="text-left">
                            <h2 className="font-display font-bold text-xl text-foreground">
                              {section.name}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {section.items.length} items
                            </p>
                          </div>
                        </div>
                        {openSections.includes(section.name) ? (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <div className="grid gap-3">
                          {section.items.map((item, index) => (
                            <div 
                              key={index}
                              className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                            >
                              <div className="flex items-center gap-4 flex-1">
                                {/* Item placeholder image */}
                                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <div className="w-6 h-6 bg-primary/20 rounded-full"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0 ml-4">
                                <span className="font-bold text-lg text-primary">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>

            {/* Add-ons Notice */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
              <p className="text-foreground font-medium">
                🥤 Add boba pearls, jelly, or pudding for just <span className="text-primary font-bold">$0.75</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Customize: Ice Level • Sugar Level • Toppings
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Watermark />
    </div>
  );
};

export default MenuPage;
