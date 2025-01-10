import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { assets } from '../assets/assets';

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis, adipisci sed aperiam officiis minima iure, aliquid sapiente accusantium facere.
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
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Delivery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:ml-8">
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1-212-23223-90</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} className="flex-shrink-0" />
                <span>getsub@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Clock size={18} className="flex-shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin size={18} className="flex-shrink-0" />
                <span>123 Business Street, New York</span>
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
              <span>by GetSub Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;