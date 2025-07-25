import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Bella Vista</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience exceptional fine dining in an elegant atmosphere. Our passionate chefs 
              create memorable culinary experiences using the finest seasonal ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">info@bellavista.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <p>123 Gourmet Street</p>
                  <p>Culinary District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Bella Vista Fine Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;