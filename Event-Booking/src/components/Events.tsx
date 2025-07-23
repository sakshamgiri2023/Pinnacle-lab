import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Tech Conference 2024',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco Convention Center',
      attendees: 500,
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Join industry leaders for a day of innovation, networking, and insights into the future of technology.',
      price: 'From $299'
    },
    {
      id: 2,
      title: 'Spring Wedding Showcase',
      date: 'April 22, 2024',
      time: '2:00 PM - 8:00 PM',
      location: 'Grand Ballroom, Elite Hotel',
      attendees: 150,
      type: 'Wedding',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'Experience elegant wedding setups, meet vendors, and get inspired for your special day.',
      price: 'Free Entry'
    },
    {
      id: 3,
      title: 'Charity Gala Night',
      date: 'May 10, 2024',
      time: '7:00 PM - 11:00 PM',
      location: 'Metropolitan Museum',
      attendees: 300,
      type: 'Fundraiser',
      image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'An elegant evening supporting local children\'s education with dinner, auction, and entertainment.',
      price: 'From $150'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Global Marketing Summit',
      date: 'January 18, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'Downtown Conference Hall',
      attendees: 400,
      type: 'Corporate',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'A successful gathering of marketing professionals sharing strategies and best practices.',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'New Year Celebration',
      date: 'December 31, 2023',
      time: '8:00 PM - 2:00 AM',
      location: 'Skyline Rooftop',
      attendees: 250,
      type: 'Social',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      description: 'An unforgettable night welcoming 2024 with live music, gourmet dining, and fireworks.',
      status: 'Completed'
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-lg">Events</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Discover Amazing
            <span className="text-amber-500 block">Events & Experiences</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Browse our upcoming events or explore our portfolio of successfully executed gatherings. 
            Each event is crafted with precision and passion.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'past'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
                {event.status && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Calendar className="h-4 w-4 mr-3 text-amber-500" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="h-4 w-4 mr-3 text-amber-500" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin className="h-4 w-4 mr-3 text-amber-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Users className="h-4 w-4 mr-3 text-amber-500" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  {event.price && (
                    <div className="text-amber-600 font-bold text-lg">
                      {event.price}
                    </div>
                  )}
                  <button className="flex items-center space-x-2 bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800 transition-colors group-hover:bg-amber-600">
                    <span>{activeTab === 'upcoming' ? 'Register' : 'View Details'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Never Miss an Event
          </h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming events, 
            exclusive invitations, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;