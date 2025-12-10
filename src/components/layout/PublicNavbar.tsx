import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X, Bell } from "lucide-react";
import { useState } from "react";
import ProfileDropdown from "@/components/ProfileDropdown";

interface PublicNavbarProps {
  isLoggedIn?: boolean;
}

const PublicNavbar = ({ isLoggedIn = false }: PublicNavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="GoToGifty" className="h-8 lg:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/stores">
              <Button variant="nav" size="sm">
                Stores
              </Button>
            </Link>
            <Link to="/networks">
              <Button variant="nav" size="sm">
                Networks
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="nav" size="sm">
                How it Works
              </Button>
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link to="/notifications">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="accent" size="sm">
                    My Cards
                  </Button>
                </Link>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="accent">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/stores" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Stores
                </Button>
              </Link>
              <Link to="/networks" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Networks
                </Button>
              </Link>
              <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  How it Works
                </Button>
              </Link>
              <div className="border-t border-border pt-4 mt-2 flex gap-2">
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard" className="flex-1">
                      <Button variant="accent" className="w-full">
                        My Cards
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" className="flex-1">
                      <Button variant="accent" className="w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default PublicNavbar;
