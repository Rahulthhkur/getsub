import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-16 lg:pt-16 lg:pb-24 bg-gray-100 rounded-lg md:rounded-2xl text-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left">
          <h1 className="font-prata font-normal text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-tight">
            <span className="block">Discover</span>
            <span className="block">Most Suitable</span>
            <span className="block">Gadgets</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Find the best, reliable, and cheap smart watches here.
            We focus on product quality. Here you can find smart
            watches of almost all brands. So why are you waiting?
            Just order now!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/shop">
              <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white text-sm sm:text-base rounded-full hover:bg-slate-950 transition-colors">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-first md:order-last">
          <motion.img
            src={assets.swatch}
            alt="Smart Watch"
            className="w-64 sm:w-80 md:w-96 max-w-full mx-auto transform transition-transform duration-700 hover:rotate-360"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;