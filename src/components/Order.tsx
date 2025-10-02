import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 digits"),
  order: z.string().trim().min(1, "Please tell us what you'd like to order").max(500, "Order details must be less than 500 characters")
});

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    order: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = orderSchema.parse(formData);
      
      // Simulate order submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Order Request Received!",
        description: "We'll contact you shortly to confirm your order.",
      });
      
      setFormData({ name: "", email: "", phone: "", order: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid Input",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Order Online
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you to confirm your order
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      maxLength={255}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(510) 123-4567"
                      required
                      maxLength={20}
                      className="w-full pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="order" className="block text-sm font-medium text-foreground mb-2">
                    What would you like to order? *
                  </label>
                  <Textarea
                    id="order"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                    placeholder="Please list the items you'd like to order..."
                    required
                    maxLength={500}
                    rows={4}
                    className="w-full resize-none"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.order.length}/500 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold py-6 text-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit Order Request"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll contact you to confirm your order and arrange pickup or delivery
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Or call us directly:</p>
            <a
              href="tel:5101234567"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              (510) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
