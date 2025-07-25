import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSectionChange }) => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'Award Winning',
      description: 'Recognized by culinary experts and food critics worldwide'
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Expert Chefs',
      description: 'Our talented team brings years of fine dining experience'
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: 'Premium Quality',
      description: 'Only the finest ingredients sourced from local farms'
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: 'Exceptional Service',
      description: 'Attentive service that anticipates your every need'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            An Extraordinary Culinary Journey Awaits
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect harmony of exceptional cuisine, elegant ambiance, 
            and impeccable service in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange('reservations')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Make a Reservation
            </button>
            <button
              onClick={() => onSectionChange('menu')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bella Vista
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing an unforgettable dining experience 
              that exceeds your expectations in every way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Signature Dishes
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most celebrated culinary creations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Wagyu Ribeye</h3>
                <p className="text-gray-600 mb-4">
                  Premium wagyu beef grilled to perfection with truffle accompaniments
                </p>
                <span className="text-2xl font-bold text-amber-600">$65</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lobster Ravioli</h3>
                <p className="text-gray-600 mb-4">
                  House-made pasta filled with fresh lobster in brown butter sauce
                </p>
                <span className="text-2xl font-bold text-amber-600">$38</span>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chocolate Soufflé</h3>
                <p className="text-gray-600 mb-4">
                  Decadent dark chocolate soufflé with vanilla bean ice cream
                </p>
                <span className="text-2xl font-bold text-amber-600">$14</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onSectionChange('menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "An absolutely incredible dining experience. Every dish was a work of art, 
                and the service was impeccable. We'll definitely be returning!"
              </p>
              <p className="font-semibold text-gray-900">- Sarah Johnson</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The atmosphere is sophisticated yet welcoming, and the food exceeded 
                all expectations. Perfect for special occasions."
              </p>
              <p className="font-semibold text-gray-900">- Michael Chen</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "From appetizers to dessert, every bite was perfection. The wine 
                pairings were spot-on. Truly a memorable evening."
              </p>
              <p className="font-semibold text-gray-900">- Emily Rodriguez</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;