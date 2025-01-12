import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayText}
    </motion.span>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 py-12 overflow-hidden transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-purple-100/30 blur-3xl"
          />
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
                <TypewriterText text="Discover" delay={0} />
                <span className="block mt-2">
                  <TypewriterText text="Most Suitable" delay={0.8} />
                </span>
                <span className="block mt-2">
                  <TypewriterText text="Gadgets" delay={1.6} />
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
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
              transition={{ duration: 0.8, delay: 2.2 }}
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
              transition={{ duration: 0.8, delay: 2.4 }}
              className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto md:mx-0"
            >
              {[
                { label: 'Products', value: '50+' },
                { label: 'Brands', value: '20+' },
                { label: 'Customers', value: '1000+' }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 + (index * 0.1) }}
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
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
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Decorative circles */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="w-64 h-64 rounded-full bg-blue-100/50 blur-xl"
                />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.9 }}
                  className="w-48 h-48 rounded-full bg-purple-100/50 blur-xl -mt-12 ml-12"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;