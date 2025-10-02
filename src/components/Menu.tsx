import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import menuBoba from "@/assets/menu-boba.png";
import menuCoffee from "@/assets/menu-coffee.png";
import menuSnacks from "@/assets/menu-snacks.png";

const Menu = () => {
  const menuCategories = [
    {
      name: "Boba",
      items: [
        { name: "Premium Black Milk Tea", price: "$6.00", description: "Black tea, jasmin green tea, or oolong tea" },
        { name: "Premium Jasmin Green Milk Tea", price: "$6.00", description: "Fragrant jasmin green tea" },
        { name: "Premium Oolong Milk Tea", price: "$6.00", description: "Smooth oolong tea" },
        { name: "UBE Taro Milk Tea", price: "$6.50", description: "Creamy purple yam" },
        { name: "Thai Milk Tea", price: "$6.50", description: "Rich and sweet" },
        { name: "Dirty Boba", price: "$6.50", description: "Brown sugar special" },
        { name: "Taro Milk Tea", price: "$6.50", description: "Classic taro flavor" },
        { name: "Oreo Cookie Puff", price: "$7.00", description: "Cookies and cream delight" },
        { name: "Strawberry Fruit Tea", price: "$6.50", description: "Fresh strawberry" },
        { name: "Mango Fruit Tea", price: "$6.50", description: "Tropical mango" },
        { name: "Lychee Fruit Tea", price: "$6.50", description: "Sweet lychee" },
        { name: "Passion Fruit Tea", price: "$6.50", description: "Tangy passion fruit" }
      ]
    },
    {
      name: "Matcha & Cloud",
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
      name: "Snacks & More",
      items: [
        { name: "French Fries (Regular)", price: "$7.00", description: "Crispy golden fries" },
        { name: "French Fries (Bingbing Style)", price: "$8.50", description: "Our signature seasoning" },
        { name: "Pop Corn Chicken", price: "$8.50", description: "Bite-sized crispy chicken" },
        { name: "Fried Chicken Wings", price: "$9.00", description: "Juicy chicken wings" },
        { name: "Sausage & Rice Cake Skewer", price: "$5.50", description: "Korean street food" },
        { name: "Fried Tofu", price: "$7.50", description: "Crispy tofu bites" },
        { name: "Fried Dumpling", price: "$7.50", description: "Pan-fried dumplings" },
        { name: "Cheese Stick", price: "$7.50", description: "Melty mozzarella sticks" },
        { name: "Ingeolmi Croffle", price: "$7.50", description: "Korean waffle dessert" },
        { name: "Strawberry Croffle", price: "$7.50", description: "Sweet strawberry waffle" },
        { name: "Matcha Croffle", price: "$7.50", description: "Matcha waffle treat" },
        { name: "Oreo Croffle", price: "$7.50", description: "Cookies & cream waffle" }
      ]
    },
    {
      name: "Coffee & Combos",
      items: [
        { name: "Americano", price: "$4.50", description: "Hot (12 oz) / Ice (16oz)" },
        { name: "Caffe Latte", price: "$5.50", description: "Hot (12 oz) / Ice (16oz)" },
        { name: "Cold Brew", price: "$6.00", description: "Smooth cold coffee" },
        { name: "Fresh Mango Smoothie", price: "$7.00", description: "Blended mango" },
        { name: "Fresh Strawberry Smoothie", price: "$7.00", description: "Blended strawberry" },
        { name: "Fresh Strawberry Banana", price: "$7.00", description: "Mixed berry smoothie" },
        { name: "Ingeolmi Shaved Ice", price: "$8.00", description: "Korean dessert" },
        { name: "Mango Shaved Ice", price: "$8.50", description: "Tropical shaved ice" },
        { name: "Strawberry Shaved Ice", price: "$8.50", description: "Berry shaved ice" },
        { name: "Any Milk Tea + Popcorn Chicken", price: "$11.50", description: "Perfect combo" },
        { name: "Any Milk Tea + Bingbing Fries", price: "$11.50", description: "Tea & fries combo" }
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

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={menuBoba} 
                  alt="Boba menu with milk tea and fruit tea options" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={menuCoffee} 
                  alt="Coffee and matcha series menu" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={menuSnacks} 
                  alt="Snacks and croffle menu" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="Classic Milk Tea" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto p-2 bg-muted/50 rounded-2xl">
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
