import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"/>
          <div className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl"/>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-prata font-normal text-5xl sm:text-6xl lg:text-7xl leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                <span className="block">Discover</span>
                <span className="block mt-2">Most Suitable</span>
                <span className="block mt-2">Gadgets</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Find the best, reliable, and affordable smart watches here.
              We focus on product quality. Here you can find smart
              watches of almost all brands. So why are you waiting?
              Just order now!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link to="/shop">
                <button className="px-8 py-4 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Shop Now
                </button>
              </Link>
              <Link to="/shop">
                <button className="px-8 py-4 bg-white text-gray-900 text-lg rounded-full hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                  View Collection
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto md:mx-0"
            >
              {[
                { label: 'Products', value: '50+' },
                { label: 'Brands', value: '20+' },
                { label: 'Customers', value: '1000+' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <motion.img
                src={assets.swatch}
                alt="Smart Watch"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              />
              
              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full bg-blue-100/50 blur-xl"/>
                <div className="w-48 h-48 rounded-full bg-purple-100/50 blur-xl -mt-12 ml-12"/>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;