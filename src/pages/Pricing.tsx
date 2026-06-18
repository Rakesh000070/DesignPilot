import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Minus, 
  ShieldCheck, 
  Clock, 
  Lock, 
  ChevronDown, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const pricingPackages = [
  {
    name: "Starter",
    price: "₹1999",
    bestFor: "New businesses or personal brands",
    description: "Perfect for businesses that need a simple online presence",
    features: [
      "3 Page website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "1 Round of revision",
      "Delivery in 5 days"
    ],
    cta: "Get Started",
    highlighted: false,
    buttonStyle: "border-2 border-neutral-200 text-neutral-900 hover:border-primary-600 hover:text-primary-600"
  },
  {
    name: "Business",
    price: "₹4299",
    bestFor: "Growing small businesses",
    badge: "Most Popular",
    description: "Everything you need to grow your business online",
    features: [
      "7 Page website",
      "Mobile responsive",
      "Contact form",
      "Advanced SEO setup",
      "Google Analytics",
      "Social media links",
      "3 Rounds of revision",
      "Delivery in 10 days"
    ],
    cta: "Get Started",
    highlighted: true,
    buttonStyle: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/25"
  },
  {
    name: "Premium",
    price: "₹5999",
    bestFor: "Established businesses wanting full service",
    description: "A complete professional website with all features included",
    features: [
      "15+ Page website",
      "Mobile responsive",
      "Contact and booking form",
      "Full SEO optimization",
      "Google Analytics",
      "Blog setup",
      "Speed optimization",
      "6 Months support",
      "Unlimited revisions",
      "Delivery in 21 days"
    ],
    cta: "Get Started",
    highlighted: false,
    buttonStyle: "border-2 border-neutral-200 text-neutral-900 hover:border-primary-600 hover:text-primary-600"
  }
];

const comparisonData = [
  { feature: "Number of Pages", starter: "3", business: "7", premium: "15+" },
  { feature: "Mobile Responsive", starter: true, business: true, premium: true },
  { feature: "Contact Form", starter: true, business: true, premium: true },
  { feature: "SEO Setup", starter: "Basic", business: "Advanced", premium: "Full" },
  { feature: "Google Analytics", starter: false, business: true, premium: true },
  { feature: "Social Media Links", starter: false, business: true, premium: true },
  { feature: "Blog Setup", starter: false, business: false, premium: true },
  { feature: "Revisions", starter: "1 Round", business: "3 Rounds", premium: "Unlimited" },
  { feature: "Support Period", starter: "-", business: "-", premium: "6 Months" },
  { feature: "Delivery Time", starter: "5 Days", business: "10 Days", premium: "21 Days" },
];

const faqData = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade anytime as your business grows. We'll simply handle the transition smoothly."
  },
  {
    q: "Do you offer custom packages?",
    a: "Yes, contact us and we will create a custom plan tailored to your unique requirements."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal, all major credit cards, and direct bank transfers."
  }
];

const Pricing: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
            Fair & Honest
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight font-display">
            Simple and Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
            Choose the right plan for your business. No hidden fees, just high-quality design.
          </p>
        </motion.div>
      </section>

      {/* 2. Pricing Cards Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-white">
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {pricingPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-3xl border-2 flex flex-col h-full transition-all duration-300 group backdrop-blur-sm ${
                  pkg.highlighted 
                  ? 'border-primary-600 shadow-2xl lg:scale-105 z-10 bg-white/95' 
                  : 'border-neutral-100 bg-white/40 hover:bg-white/80 hover:border-primary-100'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-1 font-display">{pkg.name}</h3>
                  <p className="text-xs text-primary-600 font-semibold mb-4 uppercase tracking-wider font-sans">{pkg.bestFor}</p>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold text-neutral-900 font-display">{pkg.price}</span>
                    <span className="text-neutral-500 ml-2 text-sm font-medium">one-time</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`mt-1 p-0.5 rounded-full ${pkg.highlighted ? 'bg-primary-100 text-primary-600' : 'bg-neutral-200 text-neutral-500'} mr-3 shrink-0`}>
                        <Check size={12} />
                      </div>
                      <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <NavLink
                  to="/contact"
                  className={`w-full py-4 rounded-full text-center font-bold text-base transition-all active:scale-95 ${pkg.buttonStyle}`}
                >
                  {pkg.cta}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Comparison Table */}
      <section className="py-24 px-4 bg-neutral-50 relative overflow-hidden">
        {/* Pattern Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-25 mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-neutral-50/70" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4 font-display">Full Plan Comparison</h2>
            <p className="text-neutral-600 font-medium">A detailed look at every feature across our packages.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-neutral-200 shadow-xl bg-white/90 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 font-display">
                  <th className="p-6 font-bold text-neutral-900">Feature</th>
                  <th className="p-6 font-bold text-neutral-900 text-center">Starter</th>
                  <th className="p-6 font-bold text-primary-600 text-center">Business</th>
                  <th className="p-6 font-bold text-neutral-900 text-center">Premium</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b last:border-0 border-neutral-100 hover:bg-primary-50/30 transition-colors">
                    <td className="p-6 font-medium text-neutral-800">{row.feature}</td>
                    <td className="p-6 text-center text-neutral-600">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check size={18} className="mx-auto text-green-500" /> : <Minus size={18} className="mx-auto text-neutral-300" />
                      ) : row.starter}
                    </td>
                    <td className="p-6 text-center font-semibold text-neutral-900 bg-primary-50/30">
                      {typeof row.business === 'boolean' ? (
                        row.business ? <Check size={18} className="mx-auto text-primary-600" /> : <Minus size={18} className="mx-auto text-neutral-300" />
                      ) : row.business}
                    </td>
                    <td className="p-6 text-center text-neutral-600">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? <Check size={18} className="mx-auto text-green-500" /> : <Minus size={18} className="mx-auto text-neutral-300" />
                      ) : row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Trust Badge Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
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
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: ShieldCheck, title: "Satisfaction Guaranteed", sub: "We work until you are happy" },
              { icon: Clock, title: "On Time Delivery", sub: "We always meet deadlines" },
              { icon: Lock, title: "Secure Payment", sub: "Safe and easy payment process" },
            ].map((badge, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-white border border-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                  <badge.icon size={32} />
                </div>
                <h4 className="text-xl font-display font-bold text-neutral-900 mb-2 font-display">{badge.title}</h4>
                <p className="text-neutral-500 text-sm font-medium">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mini FAQ section */}
      <section className="py-24 px-4 bg-neutral-50 relative overflow-hidden">
        {/* Pattern Background Layer */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-25 mix-blend-multiply"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-neutral-50/70" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-neutral-900 mb-4 font-display">Pricing Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div 
                key={i} 
                className="bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-bold text-neutral-900 font-sans">{item.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-neutral-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-neutral-600 border-t border-neutral-100 font-medium">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-24 px-4 bg-neutral-900 relative overflow-hidden">
        {/* Subtle Dark Pattern layer */}
        <div className="absolute inset-0 z-0 text-[0]">
          <div 
            className="absolute inset-0 opacity-15 mix-blend-soft-light"
            style={{ 
              backgroundImage: "url('/Images/bg-pattern.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 font-display">Not sure which plan is right for you?</h2>
            <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Talk to us for free and we will help you decide the best path forward for your business.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-12 py-5 bg-primary-600 text-white rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 active:scale-95 group"
            >
              Get a Free Consultation
              <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
