import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight, 
  MessagesSquare, 
  Zap 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const faqItems = [
  {
    q: "How long does it take to build my website?",
    a: "Typical timelines are 5–21 days depending on the package. We confirm the exact schedule after our discovery call."
  },
  {
    q: "What do I need to provide?",
    a: "You’ll share your business details, any brand assets you have (like a logo), and content. If you don't have these, we’ll guide you through the preparation process."
  },
  {
    q: "Do you include revisions?",
    a: "Yes. Each package includes a set number of revision rounds. You’ll receive clear review steps throughout the project to ensure you're happy."
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. All of our designs are fully responsive, ensuring your site looks and works perfectly on phones, tablets, and desktop computers."
  },
  {
    q: "Do you help with SEO?",
    a: "We include SEO basics in every package (like proper site structure and on-page essentials). We can also discuss advanced SEO options if your goals require it."
  },
  {
    q: "Do you handle domain and hosting?",
    a: "We help you set up your domain and hosting and advise on the best options for your needs. If you already have your own, we can easily integrate with your existing provider."
  },
  {
    q: "Can I upgrade later or request a custom package?",
    a: "Yes. You can upgrade your plan at any time, or we can create a completely custom plan if your business needs don't perfectly match our standard packages."
  },
  {
    q: "What happens after the website is launched?",
    a: "You’ll get launch support and, depending on your package, ongoing maintenance. We make sure everything continues to work properly long after the site is live."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Page Header Section */}
      <section className="relative pt-20 pb-20 bg-neutral-50 px-4 border-b border-neutral-100 overflow-hidden">
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
          <div className="absolute inset-0 bg-neutral-50/70" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
            Everything You Need to Know
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Quick answers for busy business owners. We believe in clarity and transparency throughout our entire process.
          </p>
        </motion.div>
      </section>

      {/* 2. Accordion Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
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

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                  openIndex === index 
                    ? 'border-primary-200 shadow-xl shadow-primary-500/5 bg-white/90' 
                    : 'border-neutral-100 hover:border-neutral-200 bg-white/40'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-bold text-lg transition-colors font-display ${
                    openIndex === index ? 'text-primary-600' : 'text-neutral-900'
                  }`}>
                    {item.q}
                  </span>
                  <div className={`shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary-600' : 'text-neutral-400 group-hover:text-neutral-600'
                  }`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-8 text-neutral-600 leading-relaxed text-base border-t border-neutral-100 pt-6 mt-0 font-medium">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary-50/80 backdrop-blur-sm rounded-[2rem] border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-primary-500/5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-sm shrink-0 border border-primary-50">
                <MessagesSquare size={24} />
              </div>
              <div className="text-left font-sans">
                <div className="font-bold text-neutral-900">Need more detailed info?</div>
                <div className="text-sm text-neutral-600 font-medium font-sans">Our design experts are ready to help you.</div>
              </div>
            </div>
            <NavLink 
              to="/contact" 
              className="px-6 py-3 bg-white text-primary-600 border border-primary-200 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all shadow-sm active:scale-95"
            >
              Inquire Privately
            </NavLink>
          </div>
        </div>
      </section>

      {/* 3. Final CTA Section */}
      <section className="py-24 px-4 bg-neutral-900 overflow-hidden relative">
        {/* Subtle Dark Pattern layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-10 mix-blend-soft-light"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary-600/20 rounded-3xl flex items-center justify-center text-primary-500 mx-auto mb-10 border border-primary-600/30">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight font-display">Still have questions?</h2>
            <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed font-sans">
              Get a free consultation and we’ll help you choose the right plan for your business growth. No pressure, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavLink
                to="/contact"
                className="inline-flex items-center px-12 py-5 bg-primary-600 text-white rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 group active:scale-95"
              >
                Get a Free Consultation
                <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
