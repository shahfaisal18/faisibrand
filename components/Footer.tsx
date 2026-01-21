
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-serif font-bold tracking-tight text-white">Faisi<span className="text-amber-500">Brands</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              FaisiBrands is dedicated to curating the finest products for your modern lifestyle. Quality is our obsession, style is our language.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <a key={social} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-amber-600 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                  {/* Just placeholders for actual icons */}
                  <div className="w-5 h-5 border border-current rounded-sm flex items-center justify-center text-[8px] uppercase">{social[0]}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Shop Selection</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop?category=Fashion" className="hover:text-amber-500 transition-colors">Fashion</Link></li>
              <li><Link to="/shop?category=Electronics" className="hover:text-amber-500 transition-colors">Electronics</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-amber-500 transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=Lifestyle" className="hover:text-amber-500 transition-colors">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Join Our World</h4>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border-transparent rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-amber-500 transition-all text-white"
              />
              <button className="absolute right-2 top-2 bg-amber-600 hover:bg-amber-500 text-white px-3 py-1 rounded text-xs font-bold transition-colors">
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} FaisiBrands. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
