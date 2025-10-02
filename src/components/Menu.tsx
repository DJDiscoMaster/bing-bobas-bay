import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuCategories = [
    {
      name: "Classic Milk Tea",
      items: [
        { name: "Original Milk Tea", price: "$5.50", description: "Our signature blend" },
        { name: "Taro Milk Tea", price: "$6.00", description: "Creamy and aromatic" },
        { name: "Thai Tea", price: "$6.00", description: "Rich and sweet" },
        { name: "Matcha Milk Tea", price: "$6.50", description: "Premium Japanese matcha" }
      ]
    },
    {
      name: "Fruit Tea",
      items: [
        { name: "Strawberry Green Tea", price: "$6.00", description: "Fresh and fruity" },
        { name: "Passion Fruit Tea", price: "$6.00", description: "Tropical paradise" },
        { name: "Mango Green Tea", price: "$6.50", description: "Sweet and refreshing" },
        { name: "Lychee Black Tea", price: "$6.00", description: "Delicate and aromatic" }
      ]
    },
    {
      name: "Specialty",
      items: [
        { name: "Brown Sugar Boba", price: "$7.00", description: "Signature caramelized pearls" },
        { name: "Cheese Foam Tea", price: "$7.50", description: "Creamy cheese topping" },
        { name: "Bing Bing Special", price: "$8.00", description: "Our secret recipe" },
        { name: "Fruit Smoothie", price: "$7.00", description: "Blended perfection" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our carefully crafted selection of bubble tea drinks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Classic Milk Tea" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2 bg-muted/50 rounded-2xl">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name}
                  className="text-sm md:text-base py-3 rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white font-medium"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, index) => (
                    <Card 
                      key={index} 
                      className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-lg font-bold text-primary whitespace-nowrap ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <p className="text-xs text-muted-foreground">
                            Customize: Ice Level • Sugar Level • Toppings
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
            <p className="text-foreground font-medium">
              🥤 Add boba pearls, jelly, or pudding for just <span className="text-primary font-bold">$0.75</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
