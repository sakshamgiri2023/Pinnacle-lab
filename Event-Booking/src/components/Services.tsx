import React from 'react';
import { Heart, Building, GraduationCap, Gift, Users, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'From intimate ceremonies to grand celebrations, we create magical wedding experiences that reflect your love story.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Venue Selection', 'Floral Design', 'Catering Coordination', 'Photography & Video']
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional gatherings that inspire, motivate, and leave lasting impressions on your team and clients.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Conference Planning', 'Team Building', 'Product Launches', 'Award Ceremonies']
    },
    {
      icon: GraduationCap,
      title: 'Social Events',
      description: 'Milestone celebrations and social gatherings designed to bring people together in style.',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Birthday Parties', 'Anniversaries', 'Graduations', 'Holiday Parties']
    },
    {
      icon: Gift,
      title: 'Private Parties',
      description: 'Intimate gatherings and personal celebrations crafted with attention to every detail.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Dinner Parties', 'Cocktail Events', 'Garden Parties', 'Themed Celebrations']
    },
    {
      icon: Users,
      title: 'Fundraisers',
      description: 'Impactful events that engage donors and support your cause with meaningful experiences.',
      image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Gala Dinners', 'Charity Auctions', 'Awareness Campaigns', 'Donor Recognition']
    },
    {
      icon: Camera,
      title: 'Virtual Events',
      description: 'Innovative online experiences that connect audiences across the globe with seamless technology.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Webinars', 'Virtual Conferences', 'Online Workshops', 'Hybrid Events']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Event Types We
            <span className="text-amber-500 block">Specialize In</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whatever your occasion, we have the expertise and creativity to make it unforgettable. 
            Explore our comprehensive range of event planning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors group-hover:bg-amber-600">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Don't See Your Event Type?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We love unique challenges! Contact us to discuss your custom event needs 
            and let us create something extraordinary together.
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors">
            Discuss Custom Event
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;