import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-drinks.jpg";
import matchaLatte from "@/assets/matcha-latte.jpg";
import strawberryMatcha from "@/assets/strawberry-matcha.jpg";
import matchaAmericano from "@/assets/matcha-americano.jpg";

const Home = () => {
  const featuredDrinks = [
    {
      name: "Matcha Latte",
      description: "Creamy texture with authentic matcha flavor",
      image: matchaLatte,
    },
    {
      name: "Strawberry Matcha Latte",
      description: "Sweet-tart strawberry notes with earthy matcha",
      image: strawberryMatcha,
    },
    {
      name: "Matcha Americano",
      description: "Bold, pure matcha essence",
      image: matchaAmericano,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Martini Matcha Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Sip the
            <span className="text-primary block">Unexpected</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elevating your everyday ritual with sophisticated matcha drinks and high-quality baked goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 transition-elegant">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 transition-elegant">
              <Link to="/locations">Find Our Truck</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Martini Matcha Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a passion for exceptional quality and innovative flavors, Martini Matcha brings you 
              the finest ceremonial-grade matcha in unexpected and delightful combinations. Our mobile 
              experience delivers sophistication wherever you are, transforming the ordinary into extraordinary 
              moments of indulgence.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Signature Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our carefully crafted matcha creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredDrinks.map((drink, index) => (
              <Card key={index} className="group overflow-hidden shadow-elegant transition-elegant hover:shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={index === 1 ? "/lovable-uploads/b1d531ba-f845-4cc9-a032-16b73165a415.png" : drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {drink.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {drink.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8 py-4 transition-elegant">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-matcha text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Day?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Find our truck and experience the perfect blend of tradition and innovation.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4 transition-elegant">
            <Link to="/locations">Locate Our Truck</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;