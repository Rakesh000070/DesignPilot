import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  ShoppingBag, 
  Search, 
  Star,
  Layers,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Bespoke, high-converting websites designed specifically for your business goals and target audience.',
    icon: Monitor,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Fully integrated online stores that make selling your products simple, secure, and professional.',
    icon: ShoppingBag,
  },
  {
    title: 'SEO Optimization',
    description: 'Strategic search engine optimization to ensure your business gets found by the people who need you.',
    icon: Search,
  },
];

const portfolio = [
  {
    title: 'GreenLeaf Organic',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop', // Fruits/Vegetables
  },
  {
    title: 'Precision Law Firm',
    category: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop', // Office
  },
  {
    title: 'Urban Fit Studio',
    category: 'Local Business',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop', // Gym
  },
];

const testimonials = [
  {
    quote: "WebForge transformed our outdated site into a modern powerhouse. Our leads have increased by 40% since the launch.",
    author: "Sarah Jenkins",
    role: "Proprietor, Bloom & Co.",
    rating: 5,
  },
  {
    quote: "The attention to detail and professional communication was unlike any other agency we've worked with. Highly recommended!",
    author: "Michael Chen",
    role: "Director, TechPath Solutions",
    rating: 5,
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for new businesses or personal brands looking to grow.',
    features: ['3 Pages', 'Mobile Responsive', 'Basic SEO', 'Contact Form', '5 Day Delivery'],
    recommended: false,
  },
  {
    name: 'Business',
    price: '$699',
    description: 'Everything you need to grow your business online effectively.',
    features: ['7 Pages', 'Advanced SEO', 'Google Analytics', '3 Revision Rounds', '10 Day Delivery'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '$1,499',
    description: 'A complete professional website with all features included.',
    features: ['15+ Pages', 'Full SEO', 'Blog & Booking', 'Priority Support', '21 Day Delivery'],
    recommended: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-white border-b border-neutral-50">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_20%,#eef2ff_0%,transparent_50%)] opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
                <Zap size={14} className="mr-2" />
                Empowering Small Businesses
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
                Professional Websites <br/> 
                <span className="text-primary-600">That Drive Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
                We craft bespoke digital experiences tailored to your business. Turn visitors into loyal customers with a high-performance website that looks stunning on every device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/contact" 
                  className="px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center group"
                >
                  Start Your Project
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink 
                  to="/portfolio" 
                  className="px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-200 rounded-full font-semibold text-lg hover:border-primary-600 hover:text-primary-600 transition-all flex items-center justify-center"
                >
                  View Our Work
                </NavLink>
              </div>
              
              <div className="mt-12 flex items-center space-x-6 text-sm text-neutral-500">
                <div className="flex items-center">
                  <ShieldCheck size={18} className="text-primary-500 mr-2" />
                  No Hidden Fees
                </div>
                <div className="flex items-center">
                  <Monitor size={18} className="text-primary-500 mr-2" />
                  Free Consulting
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 lg:mt-0 relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white text-[0]">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern web design dashboard" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary-600/5 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-neutral-600">Everything you need to succeed online, from concept to launch and beyond.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <NavLink to="/services" className="text-primary-600 font-semibold flex items-center group/link">
                  Learn More <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">Selected Works</h2>
              <p className="text-lg text-neutral-600">Take a look at how we've helped other small businesses achieve digital excellence.</p>
            </div>
            <NavLink to="/portfolio" className="px-6 py-3 border-2 border-neutral-200 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition-all">
              View All Projects
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] shadow-md text-[0]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-2 bg-white text-neutral-900 rounded-full font-semibold">View Case Study</span>
                  </div>
                </div>
                <div className="text-xs text-primary-600 font-bold uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Trusted by Founders</h2>
            <p className="text-lg text-primary-100">Don't just take our word for it. Here's what our clients have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 text-white"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-xl italic mb-8 leading-relaxed font-medium">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-lg">{t.author}</div>
                  <div className="text-primary-200 text-sm">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-neutral-600">Choose the perfect package for your business growth. No setup fees, no surprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl border-2 transition-all duration-300 relative ${
                  plan.recommended ? 'border-primary-600 shadow-xl lg:scale-105 z-10' : 'border-neutral-100 hover:border-primary-200'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-neutral-500 ml-1">one-time</span>}
                </div>
                <p className="text-sm text-neutral-500 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-neutral-700">
                      <CheckCircle2 size={18} className={`${plan.recommended ? 'text-primary-600' : 'text-primary-400'} mr-3 shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <NavLink 
                  to="/contact" 
                  className={`block w-full py-4 rounded-full text-center font-bold transition-all ${
                    plan.recommended 
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700' 
                      : 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  Choose {plan.name}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-600/20 rounded-full blur-3xl -mb-40 -mr-40"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Ready to Forge Your Digital Presence?</h2>
              <p className="text-lg text-neutral-300 mb-10 leading-relaxed">
                Join dozens of small businesses that have modernized their brand with WebForge. Let's build something exceptional together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink 
                  to="/contact" 
                  className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 flex items-center justify-center"
                >
                  Book a Free Consultation
                </NavLink>
                <NavLink 
                  to="/portfolio" 
                  className="px-10 py-5 bg-white/5 text-white border border-white/20 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  Explore Our Work
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
