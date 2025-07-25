import React from 'react';
import { Award, Heart, Utensils, Star } from 'lucide-react';
import { chefs } from '../data/chefData';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Utensils className="h-8 w-8 text-amber-600" />,
      title: 'Culinary Excellence',
      description: 'We source the finest ingredients and employ time-honored techniques to create extraordinary dishes that celebrate the art of cooking.'
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: 'Passion & Dedication',
      description: 'Our team is driven by an unwavering passion for hospitality and a dedication to creating memorable experiences for every guest.'
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'Commitment to Quality',
      description: 'From farm to table, we maintain the highest standards of quality and sustainability in everything we do.'
    },
    {
      icon: <Star className="h-8 w-8 text-amber-600" />,
      title: 'Exceptional Service',
      description: 'We believe that exceptional food deserves exceptional service, delivered with warmth and professionalism.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About Bella Vista
          </h1>
          <p className="text-xl font-light">
            A culinary journey born from passion and perfected through dedication
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, Bella Vista emerged from a simple dream: to create a dining 
                  experience that transcends the ordinary. Our founders, Maria and Giuseppe 
                  Rossini, brought together their heritage of traditional Italian cuisine with 
                  a modern, innovative approach to fine dining.
                </p>
                <p>
                  What started as a small family restaurant has grown into one of the city's 
                  most celebrated culinary destinations. We believe that great food has the 
                  power to bring people together, create lasting memories, and touch the soul.
                </p>
                <p>
                  Every dish we serve tells a story – of tradition passed down through 
                  generations, of innovation born from creativity, and of the love and 
                  passion that goes into every meal we prepare.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">7+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To create extraordinary culinary experiences that celebrate the finest ingredients, 
            honor culinary traditions, and bring people together in an atmosphere of warmth 
            and elegance. We are committed to exceeding expectations and creating memories 
            that last a lifetime.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the experience 
              we create for our guests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Chefs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented culinary team brings together years of experience, 
              creativity, and passion to create unforgettable dining experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div key={chef.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-80 bg-cover bg-center" style={{
                  backgroundImage: `url(${chef.image})`
                }} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">{chef.title}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{chef.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {chef.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Best Fine Dining 2024
              </h3>
              <p className="text-gray-600">City Dining Awards</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4.8/5 Stars
              </h3>
              <p className="text-gray-600">Over 500 Reviews</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Diners' Choice
              </h3>
              <p className="text-gray-600">Food & Wine Magazine</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;