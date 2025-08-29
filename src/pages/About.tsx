import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A journey from tradition to innovation, one matcha at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                Martini Matcha was born from a simple yet revolutionary idea: what if we could bring 
                the sophisticated elegance of a high-end cocktail experience to the world of matcha? 
                Our founders, passionate about both traditional Japanese tea culture and modern culinary 
                innovation, embarked on a mission to create something truly extraordinary.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Every cup we serve is crafted with ceremonial-grade matcha sourced directly from the 
                pristine tea gardens of Uji, Japan. We believe that quality ingredients deserve quality 
                preparation, which is why each drink is meticulously prepared using traditional whisking 
                techniques combined with modern flavor innovations.
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Our mobile experience isn't just about convenience—it's about bringing luxury and 
                sophistication to unexpected places. Whether you find us at a bustling farmers market, 
                a corporate campus, or a local festival, we transform any location into a moment of 
                elevated indulgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 shadow-soft">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Quality First
                </h3>
                <p className="text-muted-foreground">
                  We source only the finest ceremonial-grade matcha and use premium ingredients 
                  in every creation we craft.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  We honor tradition while embracing creativity, constantly developing new 
                  flavors and experiences for our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-soft">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  We believe in building connections and bringing people together through 
                  shared experiences of exceptional taste.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl font-medium text-primary italic leading-relaxed">
              "To elevate everyday moments into extraordinary experiences through the perfect 
              fusion of traditional matcha artistry and innovative culinary creativity, bringing 
              sophistication and joy to every cup we serve."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;