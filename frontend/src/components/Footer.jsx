import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={assets.logo} alt="Company Logo" className="w-32 h-auto" />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            🚀 GetSub – Your One-Stop Shop! <br />
            Discover top-quality gadgets, fashion, and accessories at unbeatable prices. Elevate your style with our exclusive collections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-8">
  <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
  <ul className="flex flex-col gap-3">
    <NavLink to="/" className="text-gray-600 transition-colors">
      <li>Home</li>
    </NavLink>
    <NavLink to="/about" className="text-gray-600  transition-colors">
      <li>About Us</li>
    </NavLink>
    <NavLink to="/termsandcondition" className="text-gray-600 transition-colors">
      <li>Terms and Conditions</li>
    </NavLink>
    <NavLink to="/privacypolicy" className="text-gray-600 transition-colors">
      <li>Privacy Policy</li>
    </NavLink>
    <NavLink to="/shippingpolicy" className="text-gray-600 transition-colors">
      <li>Shipping Policy</li>
    </NavLink>
    <NavLink to="/cancellation-refunds" className="text-gray-600 transition-colors">
      <li>Cancellation and Refunds</li>
    </NavLink>
  </ul>
</div>




          {/* Contact Info */}
          <div className="lg:ml-8">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91-9520359121</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} className="flex-shrink-0" />
                <span>getsub@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Clock size={18} className="flex-shrink-0" />
                <span>Mon - Fri: 10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} className="flex-shrink-0" />
                <span>A-45, Lajpat Nagar II, New Delhi, Delhi 110024, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 w-full">
        <div className="container mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            <p className="text-sm text-gray-600 md:mb-0 mb-4">
              © {new Date().getFullYear()} getsub.in - All Rights Reserved
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>by Team GetSub</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;