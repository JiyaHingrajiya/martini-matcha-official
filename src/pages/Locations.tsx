import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const Locations = () => {
  const schedule = [{
    day: "Monday",
    location: "Downtown Financial District",
    address: "Corner of 5th & Main St",
    time: "7:00 AM - 2:00 PM",
    status: "confirmed"
  }, {
    day: "Tuesday",
    location: "University Campus",
    address: "Student Union Plaza",
    time: "9:00 AM - 4:00 PM",
    status: "confirmed"
  }, {
    day: "Wednesday",
    location: "Tech Park",
    address: "Innovation Drive, Building A",
    time: "8:00 AM - 3:00 PM",
    status: "confirmed"
  }, {
    day: "Thursday",
    location: "Riverside Farmers Market",
    address: "Riverside Park, Vendor Row",
    time: "10:00 AM - 6:00 PM",
    status: "tentative"
  }, {
    day: "Friday",
    location: "Arts District",
    address: "Gallery Walk & 3rd Avenue",
    time: "11:00 AM - 7:00 PM",
    status: "confirmed"
  }, {
    day: "Saturday",
    location: "Weekend Market",
    address: "Central Plaza Market",
    time: "9:00 AM - 5:00 PM",
    status: "confirmed"
  }, {
    day: "Sunday",
    location: "Private Events",
    address: "Various locations",
    time: "By appointment",
    status: "booking"
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Find Our Truck
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Follow us around the city for your daily dose of exceptional matcha. 
              We bring sophistication to every corner.
            </p>
          </div>
        </div>
      </section>

      {/* Current Location */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">📍 LOCATION</h2>
            <p className="text-xl mb-2">100 Feet Rd, Dhanmill Compund, Chhatarpur, New Delhi, Delhi 110074</p>
            
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20">
        
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Interactive Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time location tracking coming soon
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Live Tracking Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    We're working on real-time GPS tracking so you can find us anywhere in the city.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media for real-time updates, location changes, and special announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Follow on Instagram
              </Button>
              
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Locations;