import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  ArrowRight, 
  Search,
  Layout,
  Smartphone,
  Zap,
  Tag
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const categories = ['All', 'E-commerce', 'Professional Services', 'Local Business'];

const projects = [
  {
    id: 1,
    title: 'GreenLeaf Organic',
    category: 'E-commerce',
    description: 'A comprehensive online marketplace for organic produce with seamless inventory management.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop',
    features: ['Custom Checkout', 'Live Stock Sync', 'Customer Accounts'],
    challenge: 'Need for a mobile-first shopping experience that handled seasonal inventory changes automatically.',
  },
  {
    id: 2,
    title: 'Precision Law Firm',
    category: 'Professional Services',
    description: 'An authoritative and trustworthy website for a high-end legal practice specializing in corporate law.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
    features: ['Appointment Scheduling', 'Secure Client Portal', 'Resource Library'],
    challenge: 'Balancing a professional appearance with easy accessibility for potential new clients.',
  },
  {
    id: 3,
    title: 'Urban Fit Studio',
    category: 'Local Business',
    description: 'Dynamic fitness studio website with integrated class bookings and member testimonials.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    features: ['Live Class Schedule', 'Trainer Profiles', 'Membership Stripe Integration'],
    challenge: 'Creating a high-energy visual brand that motivated users to book categories from their mobile device.',
  },
  {
    id: 4,
    title: 'The Artisan Baker',
    category: 'Local Business',
    description: 'A charming, image-rich website for a neighborhood bakery offering custom orders and catering.',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000&auto=format&fit=crop',
    features: ['Interactive Menu', 'Catering Inquiry Flow', 'Google Maps Integration'],
    challenge: 'Transitioning from social media sales to a centralized professional platform for bulk orders.',
  },
  {
    id: 5,
    title: 'BlueSky Travel',
    category: 'E-commerce',
    description: 'Modern booking platform for a boutique travel agency specializing in luxury eco-tours.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop',
    features: ['Dynamic Pricing Engine', 'Destination Guides', 'Custom Itinerary Builder'],
    challenge: 'Communicating luxury and sustainability through a minimal, high-impact visual interface.',
  },
  {
    id: 6,
    title: 'Apex Real Estate',
    category: 'Professional Services',
    description: 'Feature-packed real estate listing site with advanced filtering and virtual tour integrations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    features: ['Custom Property Search', 'Mortgage Calculator', 'Virtual Tour Ready'],
    challenge: 'Handling high-resolution image libraries without sacrificing site speed or SEO performance.',
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-20 pb-20 bg-white border-b border-neutral-100 overflow-hidden">
        {/* Pattern Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-20 mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Our Showcase
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight font-display">
              Real Work. <br/>
              <span className="text-primary-600 font-extrabold italic">Real Results.</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our recent projects and see how we\'ve helped small businesses across various industries transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-neutral-50 sticky top-16 z-30 border-b border-neutral-200 backdrop-blur-md bg-neutral-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  filter === cat 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' 
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Pattern Background Layer */}
        <div className="absolute inset-0 z-0 text-[0]">
          <div 
            className="absolute inset-0 opacity-30 mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden mb-8 aspect-[4/3] shadow-xl group-hover:shadow-2xl transition-all duration-500 text-[0]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center backdrop-blur-[2px]">
                      <div className="text-white">
                        <Tag size={24} className="mx-auto mb-4 text-primary-400" />
                        <h4 className="font-display font-bold text-xl mb-2 font-display">The Challenge</h4>
                        <p className="text-sm text-neutral-300 leading-relaxed italic font-light">
                          "{project.challenge}"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-primary-100">
                        {project.category}
                      </span>
                      <div className="flex space-x-3 text-neutral-400">
                        <Smartphone size={16} />
                        <Layout size={16} />
                        <Zap size={16} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors font-display">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed line-clamp-2 font-medium">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.features.map((feature, i) => (
                        <span key={i} className="text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-2 py-1 rounded shadow-sm border border-neutral-200/50">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center text-primary-600 font-bold text-sm group/btn hover:text-primary-700 font-display">
                      View Case Study <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle Dark Pattern layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-15 mix-blend-soft-light"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 italic text-primary-400 font-display">Our Quality Standard</h2>
              <ul className="space-y-6">
                {[
                  { title: '98/100 Average Speed Score', desc: 'Every site we build passes Google Core Web Vitals with flying colors.' },
                  { title: '100% Mobile Fluidity', desc: 'We test across 20+ different device sizes before every launch.' },
                  { title: 'Conversion-Led UI', desc: 'Every design element is placed to guide the user toward your primary goal.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center shrink-0 mt-1 border-4 border-neutral-900 ring-1 ring-primary-500 group-hover:scale-125 transition-transform duration-300">
                    </div>
                    <div className="ml-6">
                      <h4 className="font-bold text-lg mb-1 font-sans">{item.title}</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md text-center shadow-[0_0_50px_rgba(245,89,81,0.1)]"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-3xl mb-8 shadow-2xl shadow-primary-500/20 border border-primary-500/30">
                <ExternalLink size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 font-display">Want a Site Like These?</h3>
              <p className="text-neutral-400 mb-8 max-w-sm mx-auto font-light leading-relaxed">
                Each project began with a single conversation. Your business could be our next featured success story.
              </p>
              <NavLink 
                to="/contact" 
                className="inline-block px-10 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 group active:scale-95"
              >
                Start Your Project
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Pattern Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30 mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 font-display">Not Seeing Your Industry?</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-10 font-medium">
            We've worked with businesses across hundreds of niches. Contact us to see a private portfolio of work relevant to your specific business type.
          </p>
          <NavLink 
            to="/contact" 
            className="inline-flex items-center px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-bold hover:bg-primary-600 hover:text-white transition-all group shadow-sm active:scale-95 font-display"
          >
            Inquire Privately <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
