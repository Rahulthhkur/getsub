import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title.jsx';
import NewsletterBox from '../components/NewsletterBox.jsx';
import { assets } from '../assets/assets.js';

const About = () => {
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

  return (
    <div className={`transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className='text-2xl text-center pt-8 border-t'
      >
        <Title text1={'ABOUT'} text2={'US'}/>
      </motion.div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <motion.img 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='w-full md:max-w-[450px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500'
          src={assets.about_img}
          alt="About Us"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
        >
          <motion.p variants={fadeIn} className="leading-relaxed">
            At our core, we believe in delivering exceptional quality and innovation. Our journey began with a simple mission: to provide cutting-edge technology that enhances your everyday life. With years of expertise and dedication, we've become a trusted name in the industry.
          </motion.p>
          <motion.p variants={fadeIn} className="leading-relaxed">
            We take pride in curating the finest selection of products, ensuring each item meets our rigorous standards of excellence. Our team of experts carefully selects and tests every product, guaranteeing you receive only the best in class.
          </motion.p>
          <motion.b variants={fadeIn} className='text-gray-800 text-xl font-semibold'>
            Our Mission
          </motion.b>
          <motion.p variants={fadeIn} className="leading-relaxed">
            To revolutionize the way people interact with technology by providing innovative, high-quality products that seamlessly integrate into their daily lives. We strive to make advanced technology accessible to everyone while maintaining the highest standards of customer service and product excellence.
          </motion.p>
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className='text-xl py-4'
      >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className='flex flex-col md:flex-row text-sm mb-20 gap-6'
      >
        {[
          {
            title: "Quality Assurance",
            content: "We maintain rigorous quality control standards, ensuring every product meets our exceptional criteria. Our commitment to excellence means you receive only the finest technology solutions, backed by comprehensive warranty support."
          },
          {
            title: "Convenience",
            content: "Experience seamless shopping with our user-friendly platform, swift delivery services, and hassle-free return policy. We've designed our services around your needs, making technology accessible at your fingertips."
          },
          {
            title: "Exceptional Customer Service",
            content: "Our dedicated support team is available 24/7 to assist you with any queries or concerns. We believe in building lasting relationships with our customers through transparent communication and prompt assistance."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-b from-white to-gray-50'
          >
            <b className="text-xl font-semibold text-gray-800">{item.title}</b>
            <p className='text-gray-600 leading-relaxed'>{item.content}</p>
          </motion.div>
        ))}
      </motion.div>

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

export default About;