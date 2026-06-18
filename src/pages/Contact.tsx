import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Zap
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant',
    budget: 'Under $500',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user keeps typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Page Header Section */}
      <section className="relative pt-20 pb-20 bg-neutral-50 px-4 border-b border-neutral-100 text-center overflow-hidden">
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
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-6">
            Let's Talk
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 tracking-tight font-display">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Have a question or ready to start? We’d love to hear from you. Our team typically responds within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* 2. Two-Column Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden" id="contact-form">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-neutral-100 shadow-2xl shadow-neutral-200/50"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 font-display">Send us a message</h2>
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 ml-1">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="issac dip"
                          className={`w-full px-5 py-4 bg-neutral-50 rounded-xl border transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 ${
                            errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-200 focus:border-primary-500'
                          }`}
                        />
                        {errors.fullName && (
                          <div className="flex items-center text-rose-500 text-xs mt-1 ml-1">
                            <AlertCircle size={14} className="mr-1" /> {errors.fullName}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 ml-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sam214@gmail.com"
                          className={`w-full px-5 py-4 bg-neutral-50 rounded-xl border transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 ${
                            errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-200 focus:border-primary-500'
                          }`}
                        />
                        {errors.email && (
                          <div className="flex items-center text-rose-500 text-xs mt-1 ml-1">
                            <AlertCircle size={14} className="mr-1" /> {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 ml-1">Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 7415369427"
                          className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-neutral-200 transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 ml-1">Business Type</label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-neutral-200 transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat"
                        >
                          <option>Restaurant</option>
                          <option>Salon</option>
                          <option>Retail</option>
                          <option>Consulting</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-700 ml-1">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-neutral-200 transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat"
                      >
                        <option>Under $500</option>
                        <option>$500–$1000</option>
                        <option>$1000–$2000</option>
                        <option>$2000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-700 ml-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={5}
                        className={`w-full px-5 py-4 bg-neutral-50 rounded-xl border transition-all focus:outline-hidden focus:ring-4 focus:ring-primary-500/10 resize-none ${
                          errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-neutral-200 focus:border-primary-500'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <div className="flex items-center text-rose-500 text-xs mt-1 ml-1">
                          <AlertCircle size={14} className="mr-1" /> {errors.message}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 flex items-center justify-center space-x-2 active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Request a Free Quote</span>
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-neutral-900 mb-4 font-display">Message Sent!</h3>
                    <p className="text-neutral-600 text-lg mb-10 leading-relaxed font-medium">
                      Thank you! We've received your inquiry and we'll get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-3 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-all shadow-lg"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT COLUMN: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="py-6 relative z-10"
            >
              <h2 className="text-3xl font-display font-bold text-neutral-900 mb-10 font-display">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 font-sans">Email Us</h4>
                    <a href="mailto:designpilot16@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors text-lg font-medium">
                      designpilot16@gmail.com
                    </a>
                    <p className="text-xs text-neutral-400 mt-1 italic">Write to us anytime!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 font-sans">Call Us</h4>
                    <a href="tel:+15550000000" className="text-neutral-600 hover:text-primary-600 transition-colors text-lg font-medium">
                      +91 9777094193
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 font-sans">Business Hours</h4>
                    <p className="text-neutral-600 text-lg font-medium">Monday – Friday</p>
                    <p className="text-neutral-500 font-medium italic">9 AM – 6 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 mb-1 font-sans">Our Studio</h4>
                    <p className="text-neutral-600 text-lg font-medium">
                      Infocity / Chandaka Industrial Estate, Chandrasekharpur,<br />
                      Bhubaneswar, Odisha – 751024, India
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Social Links Section */}
              <div className="mt-16 pt-16 border-t border-neutral-100">
                <h4 className="text-xl font-display font-bold text-neutral-900 mb-6 font-display">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, color: 'hover:bg-[#1DA1F2]' },
                    { icon: Instagram, color: 'hover:bg-[#E1306C]' },
                    { icon: Linkedin, color: 'hover:bg-[#0077B5]' },
                    { icon: Github, color: 'hover:bg-[#333]' },
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className={`w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-400 ${social.color} hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1`}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full -ml-48 -mt-48 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-[3rem] p-12 md:p-20 border border-white/10 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(245,89,81,0.1)]"
          >
            <div className="w-16 h-16 bg-primary-600/20 rounded-3xl flex items-center justify-center text-primary-500 mx-auto mb-10 border border-primary-600/30">
              <Zap size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight font-display">Prefer to talk directly?</h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Book a free consultation call and we’ll discuss your project requirements, goals, and timeline in detail.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center px-12 py-5 bg-primary-600 text-white rounded-full font-bold text-xl hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 group active:scale-95"
              >
                <Calendar size={24} className="mr-3" />
                Book a Free Call
              </a>
            </div>
            {/* Placeholder link for booking consultation */}
            <p className="mt-6 text-xs text-neutral-500 italic">No account required to book a session.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
