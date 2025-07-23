import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Bride',
      company: 'Johnson Wedding',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Elite Events made our wedding day absolutely magical. From the initial consultation to the last dance, every detail was perfectly executed. They transformed our vision into reality and exceeded all our expectations.',
      event: 'Garden Wedding - 150 guests'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Tech Innovations Inc.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The annual conference organized by Elite Events was outstanding. Their professional approach, attention to detail, and seamless execution made our event a tremendous success. Our attendees were impressed!',
      event: 'Corporate Conference - 500 attendees'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Marketing Director',
      company: 'Global Solutions',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Elite Events was a game-changer for our product launch. They understood our brand perfectly and created an event that generated incredible buzz. The team is creative, professional, and reliable.',
      event: 'Product Launch - 200 guests'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Event Coordinator',
      company: 'Charity Foundation',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Our charity gala was a huge success thanks to Elite Events. They handled everything with such care and professionalism, allowing us to focus on our cause. The event raised more funds than we ever imagined possible.',
      event: 'Charity Gala - 300 guests'
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Birthday Celebrant',
      company: 'Personal Event',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'My 50th birthday party was absolutely perfect! Elite Events listened to every detail I wanted and delivered beyond my dreams. All my guests are still talking about what an amazing celebration it was.',
      event: '50th Birthday Party - 80 guests'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            What Our Clients
            <span className="text-amber-500 block">Say About Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Elite Events.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-amber-500/20">
              <Quote className="h-16 w-16" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div className="text-center">
                  <div className="font-bold text-slate-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-slate-600">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-amber-600 font-semibold text-sm">
                    {testimonials[currentTestimonial].company}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    {testimonials[currentTestimonial].event}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-slate-600" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-amber-500' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-amber-500 mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
            <div className="text-slate-600">Events Completed</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-amber-500 mb-2">10K+</div>
            <div className="text-slate-600">Happy Guests</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-amber-500 mb-2">5★</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable experience for your next event. 
            Contact us today to start planning something extraordinary.
          </p>
          <button className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;