
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring your event exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with you to bring your unique vision to life through seamless teamwork.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous planning and flawless execution that delivers results on time, every time.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for creating magical moments drives everything we do for your special day.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-amber-500 font-semibold text-lg">About Elite Events</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
                Creating Magic Through
                <span className="text-amber-500 block">Exceptional Events</span>
              </h2>
            </div>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 8 years of experience in the event industry, Elite Events has established
              itself as a premier event planning company. We specialize in transforming ordinary
              occasions into extraordinary experiences that captivate and inspire.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of creative professionals brings together expertise in design, logistics,
              and hospitality to deliver seamless events that reflect your unique style and vision.
              From intimate celebrations to large-scale corporate gatherings, we handle every detail
              with precision and care.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">500+</div>
                <div className="text-slate-600">Events Planned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">98%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">50+</div>
                <div className="text-slate-600">Team Members</div>
              </div>
            </div>

            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Wedding ceremony"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Corporate event"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="space-y-6 mt-8">
              <img
                src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Birthday party"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img
                src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Conference setup"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every event we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                      <Icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
