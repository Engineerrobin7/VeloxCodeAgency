
import React from 'react';
import { Link } from 'react-router-dom';

const FooterLogo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path 
          d="M20 25 L45 75 L55 75 L80 25" 
          fill="none" 
          stroke="#FF8A65" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M50 40 L65 70 M75 35 L85 25" 
          fill="none" 
          stroke="#2C3E50" 
          strokeWidth="10" 
          strokeLinecap="round"
        />
      </svg>
    </div>
    <span className="font-heading font-bold text-xl">VeloxCodeAgency</span>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="mb-6 block">
              <FooterLogo />
            </Link>
            <p className="text-textMain/50 text-sm leading-relaxed">
              Engineering high-performance digital solutions for modern enterprise and ambitious startups. Led by Sahil Goyal and Gokul Kumar Sant.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-textMain/50">
              <li><Link to="/services" className="hover:text-primary transition-colors">AI Integrations</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Cloud Architecture</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-6">Agency</h4>
            <ul className="space-y-4 text-sm text-textMain/50">
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-textMain/30 space-y-4 md:space-y-0">
          <p>© 2024 VeloxCodeAgency. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
