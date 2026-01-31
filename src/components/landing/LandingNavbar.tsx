import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import StockLiveLogo from '@/assets/stockive-logo.png';

<<<<<<< HEAD
const APP_URL = "https://inventory-wzsj.vercel.app";
=======
const APP_URL = "http://localhost:5173"; // Change this to your actual app URL
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img 
              src={StockLiveLogo} 
              alt="StockLive" 
              className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
        </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-medium"
<<<<<<< HEAD
              onClick={() => window.location.href = `${APP_URL}/?mode=login`}
=======
              onClick={() => window.location.href = `${APP_URL}/auth?mode=login`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
            >
              Log in
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
<<<<<<< HEAD
              onClick={() => window.location.href = `${APP_URL}/?mode=signup&plan=BASIC`}
=======
              onClick={() => window.location.href = `${APP_URL}/auth?mode=signup&plan=BASIC`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
            >
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all px-4 py-3 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start"
<<<<<<< HEAD
                  onClick={() => window.location.href = `${APP_URL}/?mode=login`}
=======
                  onClick={() => window.location.href = `${APP_URL}/auth?mode=login`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
                >
                  Log in
                </Button>
                <Button 
                  size="sm" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
<<<<<<< HEAD
                  onClick={() => window.location.href = `${APP_URL}/?mode=signup&plan=BASIC`}
=======
                  onClick={() => window.location.href = `${APP_URL}/auth?mode=signup&plan=BASIC`}
>>>>>>> d1a2b457d616c106772da36791eb71ebc64047df
                >
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
