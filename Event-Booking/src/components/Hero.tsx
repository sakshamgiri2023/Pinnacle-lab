import React from 'react';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Elegant event setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-white/90">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-amber-400" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm">Events Created</p>
            </div>
            <div className="text-white/90">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-amber-400" />
                <span className="text-2xl font-bold">10K+</span>
              </div>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div className="text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-amber-400" />
                <span className="text-2xl font-bold">8+</span>
              </div>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Unforgettable
            <span className="block text-amber-400">Events</span>
            <span className="block text-4xl md:text-5xl font-light">Crafted to Perfection</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we transform your vision into 
            extraordinary experiences that leave lasting memories.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center space-x-2">
                <span>Book Your Event</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              View Our Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4">Trusted by leading brands</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold text-lg">Google</div>
              <div className="text-white font-semibold text-lg">Microsoft</div>
              <div className="text-white font-semibold text-lg">Apple</div>
              <div className="text-white font-semibold text-lg">Netflix</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;