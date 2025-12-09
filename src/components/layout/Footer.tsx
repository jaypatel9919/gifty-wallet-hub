import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="GoToGifty" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Your smart way to gift, save & spend. Digital gift cards that work everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/stores" className="hover:text-accent transition-colors">
                  All Stores
                </Link>
              </li>
              <li>
                <Link to="/networks" className="hover:text-accent transition-colors">
                  Networks
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-accent transition-colors">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-semibold mb-4">For Business</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/business" className="hover:text-accent transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/store-admin" className="hover:text-accent transition-colors">
                  Store Admin
                </Link>
              </li>
              <li>
                <Link to="/network-admin" className="hover:text-accent transition-colors">
                  Network Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/support" className="hover:text-accent transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 GoToGifty. All rights reserved.</p>
          <div className="flex gap-6">
            <span>🇺🇸 United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
