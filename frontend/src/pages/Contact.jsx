import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title.jsx';
import { assets } from '../assets/assets.js';
import NewsletterBox from '../components/NewsletterBox.jsx';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className='text-center text-2xl pt-10 border-t'
      >
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          className="relative group"
        >
          <img 
            className='w-full md:max-w-[480px] rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-2xl' 
            src={assets.contact_img} 
            alt="Contact Us" 
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className='flex flex-col justify-center items-start gap-6 md:pl-8'
        >
          <motion.div variants={fadeIn} className="space-y-2">
            <p className='font-semibold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
              Our Store
            </p>
            <p className='text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center gap-2'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              A-45, Lajpat Nagar II, New Delhi, Delhi 110024, India
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-2">
            <p className='text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center gap-2'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Tel: +91-9520359121
            </p>
            <p className='text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center gap-2'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email: getsub@gmail.com
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-2 mt-4">
            <p className='font-semibold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
              Careers at Getsub
            </p>
            <p className='text-gray-500'>Learn more about our team and job openings</p>
          </motion.div>

          <motion.button
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='border-2 border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300 rounded-full shadow-md hover:shadow-xl relative overflow-hidden group'
          >
            <span className="relative z-10">Explore Jobs</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <NewsletterBox/>
      </motion.div>
    </div>
  );
};

export default Contact;