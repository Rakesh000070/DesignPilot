import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  Users, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const stats = [
  { label: 'Websites Delivered', value: '50+', icon: Globe },
  { label: 'Client Satisfaction', value: '98%', icon: Users },
  { label: 'More Traffic on Average', value: '3x', icon: TrendingUp },
];

const mainTestimonials = [
  {
    quote: "I had no idea a website could bring this many customers. The team was professional and delivered on time.",
    author: "Michael Chen",
    role: "Owner, Chen's Auto Repair",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Simple, clean, and fast. My salon website looks amazing. Clients love booking online now.",
    author: "Priya Sharma",
    role: "Manager, Glow Salon",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "We tried 2 other designers before. This team actually understood our business and delivered exactly what we needed.",
    author: "David Brown",
    role: "CEO, Brown Consulting",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Affordable, professional, and reliable. Our restaurant website now shows up first on Google. Highly recommend.",
    author: "Lisa Martinez",
    role: "Owner, Taco Fiesta",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Page Header Section */}
      <section className="pt-20 pb-20 bg-neutral-50 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
            Client Success
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it. Hear from business owners we've helped transform their online presence and reach new heights.
          </p>
        </motion.div>
      </section>

      {/* 2. Stats / Numbers Bar */}
      <section className="py-12 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-center space-x-6 md:border-r border-neutral-100 last:border-0`}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0">
                  <stat.icon size={28} />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Testimonial (Big highlight) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-white shadow-2xl shadow-primary-500/20"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="mb-10 inline-flex p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Quote size={40} className="text-primary-200" />
              </div>
              
              <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight mb-12 italic">
                "They completely transformed our online presence. Within 2 weeks we got 10 new customers from our website. Best investment we made this year."
              </blockquote>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden shadow-lg shadow-black/20">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-bold">Sarah Johnson</div>
                    <div className="text-primary-200 font-medium">Owner, Bloom Florist</div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Testimonial Cards Grid */}
      <section className="py-24 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">More Happy Clients</h2>
            <p className="text-lg text-neutral-600">We work across various industries, from local restaurants to professional services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {mainTestimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-neutral-100 hover:border-primary-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>
                
                <p className="text-lg text-neutral-700 font-medium mb-10 leading-relaxed italic">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-100 border-2 border-white shadow-md text-[0]">
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">{t.author}</div>
                    <div className="text-sm text-neutral-500 font-medium">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Video or Image Quote Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-center lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <div className="mb-8 p-3 bg-primary-50 rounded-2xl text-primary-600 inline-block">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-8 leading-tight tracking-tight">
                Your Success is <br/> <span className="text-primary-600">Our Reputation.</span>
              </h2>
              <blockquote className="text-xl text-neutral-600 mb-10 leading-relaxed font-light italic">
                "We don't just build websites; we build partnerships. Seeing our clients' businesses flourish is what motivates the WebForge team every day."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-primary-600 font-bold">
                  <CheckCircle2 size={24} className="mr-3" />
                  Guaranteed Results
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team happy with client" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center">
                  <div className="bg-white px-6 py-2 rounded-full font-bold text-sm text-neutral-900 shadow-xl border border-neutral-100 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                    We love helping businesses grow online
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-24 px-4 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary-600/20 rounded-3xl flex items-center justify-center text-primary-500 mx-auto mb-10 border border-primary-600/30">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to get results like these?</h2>
            <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
              Let's build a website that grows your business. We're ready when you are.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-12 py-5 bg-primary-600 text-white rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 group active:scale-95"
            >
              Get a Free Consultation
              <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
