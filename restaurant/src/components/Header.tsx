import React from 'react';
import { Menu, X, ShoppingBag, User, Phone } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Reservations', id: 'reservations' },
    { name: 'Order Online', id: 'order' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onSectionChange('home')}>
            <h1 className="text-2xl font-bold text-amber-700">Bella Vista</h1>
            <p className="text-xs text-gray-600 -mt-1">Fine Dining</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'text-amber-700 border-b-2 border-amber-700'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center text-gray-600 hover:text-amber-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">(123) 456-7890</span>
            </a>
            <button
              onClick={() => onSectionChange('order')}
              className="relative p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => onSectionChange('admin')}
              className="p-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-amber-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                    currentSection === item.id
                      ? 'text-amber-700 bg-amber-50'
                      : 'text-gray-600 hover:text-amber-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t">
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-gray-600 hover:text-amber-700"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (123) 456-7890
                </a>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      onSectionChange('order');
                      setIsMenuOpen(false);
                    }}
                    className="relative p-2 text-gray-600 hover:text-amber-700"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      onSectionChange('admin');
                      setIsMenuOpen(false);
                    }}
                    className="p-2 text-gray-600 hover:text-amber-700"
                  >
                    <User className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;