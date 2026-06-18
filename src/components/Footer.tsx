import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
  ],
  services: [
    { name: 'Web Design', path: '/services' },
    { name: 'E-commerce', path: '/services' },
    { name: 'SEO', path: '/services' },
    { name: 'Branding', path: '/services' },
  ],
  support: [
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Refusal Policy', path: '#' },
    { name: 'Privacy Policy', path: '#' },
  ],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo and Info */}
          <div className="space-y-6">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                <Globe size={24} />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Design<span className="text-primary-500">Pilot</span>
              </span>
            </NavLink>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Empowering small businesses with world-class digital experiences. We turn your vision into a professional website that drives growth.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, url: '#' },
                { Icon: Instagram, url: 'https://www.instagram.com/designpilot_16?igsh=bGVvczBrcTBzczE5' },
                { Icon: Linkedin, url: '#' },
                { Icon: Github, url: '#' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all text-neutral-400"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-sm hover:text-primary-500 transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-sm hover:text-primary-500 transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>Infocity / Chandaka Industrial Estate, Chandrasekharpur,<br />Bhubaneswar, Odisha – 751024, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <span>+91 9777094193</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <span>designpilot16@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0">
          <p>© {currentYear}  DesignPilot Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
