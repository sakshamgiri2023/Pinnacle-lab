import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Calendar className={`h-8 w-8 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              Elite Events
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-amber-500 ${isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className={`h-4 w-4 ${isScrolled ? 'text-slate-600' : 'text-white'}`} />
              <span className={`text-sm ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
                (555) 123-4567
              </span>
            </div>
            <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors">
              Book Event
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-700 font-medium hover:text-amber-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-3">
                <Phone className="h-4 w-4 text-slate-600" />
                <span className="text-sm text-slate-600">(555) 123-4567</span>
              </div>
              <button className="w-full bg-amber-500 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-600 transition-colors">
                Book Event
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
