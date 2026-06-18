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
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Precision Law Firm',
    category: 'Professional Services',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Urban Fit Studio',
    category: 'Local Business',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
  },
];

const testimonials = [
  {
    quote: "DesignPilot transformed our outdated site into a modern powerhouse. Our leads have increased by 40% since the launch.",
    author: "Abhinav kumar",
    role: "Manager.",
    rating: 4.2,
  },
  {
    quote: "The attention to detail and professional communication was unlike any other agency we've worked with. Highly recommended!",
    author: "Arnav Pandit",
    role: "Associate, TechPath Solutions",
    rating: 5,
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '₹1999',
    description: 'Perfect for new businesses or personal brands looking to grow.',
    features: ['3 Pages', 'Mobile Responsive', 'Basic SEO', 'Contact Form', '5 Day Delivery'],
    recommended: false,
  },
  {
    name: 'Business',
    price: '₹4299',
    description: 'Everything you need to grow your business online effectively.',
    features: ['7 Pages', 'Advanced SEO', 'Google Analytics', '3 Revision Rounds', '10 Day Delivery'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '₹5999',
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
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-indigo-50/50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-200/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100/50 text-primary-700 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-primary-200/50">
                <Zap size={16} className="mr-2 fill-primary-600" />
                Creative Navigation
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
                Strategic Web Design That <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-neutral-900 font-black">Turns Visitors Into Customers</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-lg font-medium">
                High-performance, stunning designs crafted to convert visitors into loyal customers. Elevate your professional presence today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="w-full sm:w-auto">
                  <NavLink 
                    to="/contact" 
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-full font-bold text-xl hover:shadow-[0_20px_40px_rgba(245,89,81,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden active:scale-95 ring-8 ring-primary-100/50"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-white/0 to-white/10"></div>
                    <span className="relative z-10 flex items-center">
                      Get a Free Consultation
                      <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </NavLink>
                  
                  <div className="mt-4 flex items-center justify-center sm:justify-start space-x-2 text-sm font-semibold text-neutral-500">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span>Trusted by 50+ businesses</span>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-16 bg-neutral-200 mx-4"></div>

                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 w-full sm:w-auto">
                  <div className="flex items-center space-x-3 text-neutral-700 font-semibold italic">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span>5-Star Rated</span>
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-700 font-semibold italic">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span>Guaranteed Results</span>
                  </div>
                </div>
              </div>

              {/* Mini Feature Row */}
              <div className="pt-8 border-t border-neutral-200/60 grid grid-cols-3 gap-6">
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center text-primary-600 mb-3">
                    <Zap size={20} className="fill-primary-100" />
                  </div>
                  <span className="text-sm font-bold text-neutral-900 leading-tight">Ultra Fast<br/>Performance</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center text-primary-600 mb-3">
                    <Smartphone size={20} />
                  </div>
                  <span className="text-sm font-bold text-neutral-900 leading-tight">Mobile First<br/>Responsive</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-neutral-100 flex items-center justify-center text-primary-600 mb-3">
                    <Search size={20} />
                  </div>
                  <span className="text-sm font-bold text-neutral-900 leading-tight">Expert SEO<br/>Optimized</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 lg:mt-0 relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-52 h-52 bg-primary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-indigo-600/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 p-4 bg-white/50 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200/50 text-[0]">
                    <img 
                      src="/Images/Home-pade-image.jpeg" 
                      alt="Modern web design dashboard showing performance metrics" 
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <motion.div 
                  className="absolute -bottom-5 -right-5 bg-white p-3 rounded-2xl shadow-2xl border border-neutral-100 z-20 flex items-center space-x-3 pr-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Business Growth</div>
                    <div className="text-lg font-bold text-neutral-900">+84% Conversions</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute top-8 -left-8 bg-white p-3 rounded-2xl shadow-2xl border border-neutral-100 z-20 flex items-center space-x-3 pr-6"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Design System</div>
                    <div className="text-lg font-bold text-neutral-900">Modern UI/UX</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">Our Expertise</h2>
            <p className="text-lg text-neutral-600">Everything you need to succeed online, from concept to launch and beyond.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 mb-5 leading-relaxed">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">Selected Works</h2>
              <p className="text-lg text-neutral-600">Take a look at how we've helped other small businesses achieve digital excellence.</p>
            </div>
            <NavLink to="/portfolio" className="px-6 py-3 border-2 border-neutral-200 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition-all">
              View All Projects
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] shadow-md text-[0]">
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
                <div className="text-xs text-primary-600 font-bold uppercase tracking-widest mb-1">{project.category}</div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">Trusted by Founders</h2>
            <p className="text-lg text-primary-100">Don't just take our word for it. Here's what our clients have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white"
              >
                <div className="flex mb-4">
                  {[...Array(Math.floor(t.rating))].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400 mr-1" />
                  ))}
                  {t.rating % 1 !== 0 && (
                    <Star key="half" size={18} className="text-yellow-400 fill-yellow-400/50 mr-1" />
                  )}
                </div>
                <p className="text-xl italic mb-6 leading-relaxed font-medium">"{t.quote}"</p>
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
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-lg text-neutral-600">Choose the perfect package for your business growth. No setup fees, no surprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="mb-3">
                  <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-neutral-500 ml-1">one-time</span>}
                </div>
                <p className="text-sm text-neutral-500 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl -mb-36 -mr-36"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Ready to Design Your Digital Presence?</h2>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Ready to transform your small businesses that have modernized their brand with DesignPilot. Let's build something exceptional together.
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