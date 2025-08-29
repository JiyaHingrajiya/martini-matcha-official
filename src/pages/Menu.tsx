import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import matchaLatte from "@/assets/matcha-latte.jpg";
import strawberryMatcha from "@/assets/strawberry-matcha.jpg";
import matchaAmericano from "@/assets/matcha-americano.jpg";
import croissant from "@/assets/croissant.jpg";

const Menu = () => {
  const beverages = [
    {
      name: "Matcha Latte",
      description: "Our signature drink featuring ceremonial-grade matcha perfectly balanced with steamed milk, creating a creamy texture with authentic earthy matcha flavor that awakens your senses.",
      price: "$6.50",
      image: matchaLatte,
      featured: true,
    },
    {
      name: "Strawberry Matcha Latte",
      description: "A delightful fusion of sweet-tart strawberry notes harmoniously blended with earthy matcha, topped with fresh strawberry pieces for a beautiful pink-green gradient experience.",
      price: "$7.50",
      image: strawberryMatcha,
      featured: true,
    },
    {
      name: "Matcha Americano",
      description: "For the purist - bold, pure matcha essence with hot water, delivering an intense and authentic matcha experience without any milk interference.",
      price: "$5.50",
      image: matchaAmericano,
    },
    {
      name: "Iced Sparkling Matcha",
      description: "Coming soon - A refreshing twist on traditional matcha with sparkling water, light sweetness, and a hint of citrus for the perfect summer refreshment.",
      price: "$6.00",
      image: null,
      comingSoon: true,
    },
  ];

  const food = [
    {
      name: "Artisan Croissant",
      description: "Flaky, buttery perfection. Our golden croissants are made fresh daily with premium French butter, featuring delicate layers that melt in your mouth - the perfect companion to any matcha creation.",
      price: "$4.50",
      image: croissant,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Matcha Collection
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each creation is carefully crafted with ceremonial-grade matcha and premium ingredients, 
              delivering an experience that honors tradition while embracing innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Signature Beverages
            </h2>
            <p className="text-lg text-muted-foreground">
              Handcrafted matcha creations that redefine your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {beverages.map((drink, index) => (
              <Card key={index} className="group overflow-hidden shadow-elegant transition-elegant hover:shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                    {drink.image ? (
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-muted-foreground">Coming Soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {drink.name}
                      </h3>
                      {drink.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                      {drink.comingSoon && (
                        <Badge variant="outline" className="text-xs">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {drink.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {drink.price}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Fresh Baked Goods
            </h2>
            <p className="text-lg text-muted-foreground">
              The perfect complement to your matcha experience
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {food.map((item, index) => (
              <Card key={index} className="group overflow-hidden shadow-elegant transition-elegant hover:shadow-2xl">
                <div className="md:flex">
                  <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    />
                  </div>
                  <CardContent className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {item.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {item.price}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-accent/20 rounded-lg p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                A Note on Quality
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All our matcha is sourced directly from Uji, Japan, the historic heart of premium tea cultivation. 
                We use only ceremonial-grade matcha, stone-ground from shade-grown tencha leaves, ensuring 
                the vibrant green color, smooth texture, and complex umami flavor that makes each cup exceptional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;