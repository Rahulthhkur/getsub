import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import TestimonialsSection from '../components/Testimonials';
import ShopbyCategory from '../components/ShopbyCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure the styles are imported

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Hero />
      <ShopbyCategory />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <TestimonialsSection />
      <NewsletterBox />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={true} />
    </div>
  );
};

export default Home;
