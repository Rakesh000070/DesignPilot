import React from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  RotateCcw, 
  Flag, 
  Search, 
  Wrench, 
  BarChart3, 
  Check, 
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    id: 'web-design',
    title: 'Custom Website Design',
    description: 'We build bespoke websites from the ground up, tailored to your brand identity and business objectives.',
    longDescription: 'Our custom design process focuses on creating a unique digital footprint that differentiates you from competitors. We don\'t use generic templates; every pixel is placed with your specific audience in mind.',
    features: ['Unique UI/UX Design', 'Brand Alignment', 'Conversion Optimization', 'Responsive for all Devices'],
    icon: Monitor,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'web-redesign',
    title: 'Website Redesign',
    description: 'Is your current site outdated or slow? We provide comprehensive overhauls to modernize your digital presence.',
    longDescription: 'A redesign is more than just a fresh coat of paint. We analyze your current performance and rebuild your site with modern standards, improved speed, and better user flows.',
    features: ['Performance Audits', 'Modern Layouts', 'Content Restructuring', 'Platform Migrations'],
    icon: RotateCcw,
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'landing-pages',
    title: 'High-Conversion Landing Pages',
    description: 'Targeted single-page websites designed specifically to turn ad traffic into actual leads or sales.',
    longDescription: 'Perfect for marketing campaigns or product launches. We focus entirely on the "Call to Action," removing distractions and guiding users toward the conversion goal.',
    features: ['A/B Testing Ready', 'Fast Loading Times', 'Impactful Copywriting', 'Easy CRM Integration'],
    icon: Flag,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'seo-performance',
    title: 'SEO & Performance',
    description: 'Strategic optimization to ensure your business ranks on Google and loads in the blink of an eye.',
    longDescription: 'What good is a beautiful site if no one can find it? We implement technical SEO best practices and optimize core web vitals for maximum search engine visibility.',
    features: ['Keyword Research', 'Meta Data Strategy', 'Site Speed Optimization', 'Schema Markup'],
    icon: Search,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'maintenance',
    title: 'Support & Maintenance',
    description: 'Peace of mind with ongoing technical support, security updates, and content management.',
    longDescription: 'The web changes fast. We keep your site secure, updated, and functional so you can focus on running your business without worrying about technical glitches.',
    features: ['Security Monitoring', 'Monthly Backups', 'Content Updates', 'Plugin/CMS Management'],
    icon: Wrench,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    id: 'branding',
    title: 'Digital Branding',
    description: 'Crafting the visual assets and identity that make your business memorable in the digital space.',
    longDescription: 'We help you establish a cohesive look and feel across your website, from logo refinement to color palettes and typography systems.',
    features: ['Logo Refresh', 'Style Guides', 'Iconography Systems', 'Visual Storytelling'],
    icon: Palette,
    color: 'bg-indigo-50 text-indigo-600',
  },
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'We create custom wireframes and high-fidelity visual mockups.',
    icon: Palette,
  },
  {
    title: 'Development',
    description: 'We bring the design to life with clean, performant code.',
    icon: Code2,
  },
  {
    title: 'Launch',
    description: 'We test everything thoroughly and push your site live.',
    icon: BarChart3,
  },
];

const Services: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#4f46e5_0%,transparent_50%)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Our <span className="text-primary-400">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              We provide end-to-end web services designed to help small businesses compete at the highest level in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-neutral-100 hover:border-primary-100 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 ${service.color} group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-neutral-500">
                      <Check size={16} className="text-primary-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <NavLink 
                  to="/contact" 
                  className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors group/link"
                >
                  Get Started <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6 tracking-tight">How We Work</h2>
            <p className="text-lg text-neutral-600">A streamlined, transparent process that ensures your project is delivered on time and exceeds expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-[2.75rem] left-8 right-8 h-px bg-neutral-200 -z-0"></div>
            
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 bg-white border-4 border-neutral-50 rounded-full flex items-center justify-center text-primary-600 shadow-lg mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold absolute top-0 left-1/2 translate-x-4 -translate-y-2 border-2 border-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8 tracking-tight">Focused on Mobile Performance</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                With over 60% of web traffic coming from mobile devices, we prioritize "Mobile-First" design for every project. Your site won't just fit on a phone—it will excel.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Lightning Fast Load', desc: 'Optimized for 4G/5G speeds.', icon: Zap },
                  { title: 'Touch-Friendly', desc: 'Large buttons and easy nav.', icon: Smartphone },
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mr-4">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">{item.title}</h4>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="bg-primary-600 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/10 mb-4"></div>
                    <div className="flex gap-2">
                       <div className="h-2 bg-white/20 rounded w-1/4"></div>
                       <div className="h-2 bg-white/20 rounded w-1/4"></div>
                    </div>
                  </div>
                  <p className="text-white text-center font-display font-semibold italic text-xl">"Responsive isn't a feature; it's a requirement."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">Not Sure Which Service <br/> Your Business Needs?</h2>
            <p className="text-xl text-neutral-400 mb-12">
              Schedule a free 15-minute consultation. We'll audit your current presence and give you an honest recommendation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavLink 
                to="/contact" 
                className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20"
              >
                Book Free Consultation
              </NavLink>
              <NavLink 
                to="/pricing" 
                className="px-10 py-5 bg-white/5 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Pricing Packages
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
