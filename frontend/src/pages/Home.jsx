import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import TestimonialsSection from '../components/Testimonials'
import ShopbyCategory from '../components/ShopbyCategory'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure the styles are imported

const Home = () => {
  return (
    <div>
      <Hero/>
      <ShopbyCategory/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <TestimonialsSection/>
      <NewsletterBox/>
    </div>
  )
}

export default Home