import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Rocket
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const stats = [
  { label: 'Happy Clients', value: '150+' },
  { label: 'Projects Completed', value: '200+' },
  { label: 'Years Experience', value: '8+' },
  { label: 'Support Hours', value: '24/7' },
];

const values = [
  {
    title: 'Customer First',
    description: 'We believe your success is our success. Every decision we make is guided by your business goals.',
    icon: Heart,
  },
  {
    title: 'Precision Design',
    description: 'We don\'t just make things pretty. We design with purpose, focusing on usability and conversion.',
    icon: Target,
  },
  {
    title: 'Transparent Growth',
    description: 'Honest pricing, clear communication, and measurable results. No jargon, just growth.',
    icon: Sparkles,
  },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Principal Designer',
    bio: 'With over 10 years in the industry, Alex started WebForge to help local businesses thrive online.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Strategist',
    bio: 'Sarah ensures every website we build is backed by a solid marketing strategy that generates leads.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Marcus Thorne',
    role: 'Technical Director',
    bio: 'Marcus oversees our technical infrastructure, ensuring every site is fast, secure, and reliable.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
  },
];

const About: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Our Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
              Crafting Change for <br/>
              <span className="text-primary-600">Small Business Owners</span>
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Based in San Francisco, WebForge is a specialized agency dedicated to level the playing field for local entrepreneurs through premium web design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">The WebForge Story</h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  It started in a small coffee shop in 2018. We noticed a recurring problem: small businesses were being priced out of high-quality web design or stuck with "template" sites that didn't drive actual growth.
                </p>
                <p>
                  We believed that every business, regardless of size, deserves a professional digital presence that truly reflects their value. WebForge was born from that mission—to "forge" premium digital tools that are affordable, effective, and beautiful.
                </p>
                <p>
                  Today, we've helped hundreds of businesses transition into the digital age with confidence. We aren't just your developers; we are your partners in growth.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-display font-bold text-primary-600 mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 text-[0]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                  alt="WebForge team working together" 
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-600 rounded-3xl -z-10 opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary-600 rounded-full blur-3xl -z-10 opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#4f46e5_0%,transparent_30%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 italic text-primary-400">Our Mission</h3>
              <p className="text-xl text-neutral-300 leading-relaxed font-light">
                To empower local businesses by providing them with the same high-caliber design and strategic insights usually reserved for large corporations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 italic text-primary-400">Our Vision</h3>
              <p className="text-xl text-neutral-300 leading-relaxed font-light">
                To become the most trusted digital partner for small business owners globally, fostering a more vibrant and diverse local economic landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">Values We Live By</h2>
            <p className="text-lg text-neutral-600">Our culture is built on integrity, innovation, and a relentless focus on our clients' results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl border border-neutral-100 hover:border-primary-300 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4">{v.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">Meet the Forgers</h2>
            <p className="text-lg text-neutral-600">The small but mighty team dedicated to your business success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-8 inline-block">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 mx-auto text-[0]">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg">
                    <Award size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-4 text-sm uppercase tracking-wider">{member.role}</div>
                <p className="text-neutral-600 max-w-xs mx-auto leading-relaxed italic">
                  "{member.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center bg-white/5 p-10 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Why Partner With WebForge?</h2>
              <ul className="space-y-6">
                {[
                  'We speak small business, not tech jargon.',
                  'Data-driven designs built for conversions.',
                  'Direct communication with your actual designer.',
                  'No long-term commitments or hidden fees.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-neutral-300">
                    <CheckCircle2 size={24} className="text-primary-500 mr-4 shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 lg:mt-0 text-center lg:text-left">
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                We're ready to help you take the next step. Let's discuss your vision and see how we can bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/contact" 
                  className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all flex items-center justify-center group"
                >
                  Schedule a Call
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <NavLink 
                  to="/portfolio" 
                  className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all text-center"
                >
                  Browse Portfolio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
