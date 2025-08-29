import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/73b856c9-dea0-4f76-b3f0-0211d63865ab.png" 
                alt="Martini Matcha Logo" 
                className="h-8 w-8"
              />
              <span className="font-display text-xl font-bold">
                Martini Matcha
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Elevating your everyday ritual with sophisticated matcha drinks and high-quality baked goods.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © 2024 Martini Matcha. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">About Us</Link></li>
              <li><Link to="/menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Our Menu</Link></li>
              <li><Link to="/locations" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Find Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Instagram</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Facebook</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;