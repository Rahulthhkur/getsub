import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Smartwatches from './pages/Smartwatches';
import Headphones from './pages/Headphones';
import Earbuds from './pages/Earbuds';
import Drones from './pages/Drones';
import Accessories from './pages/Accessories';
import Combo from './pages/Combo';
import SearchBar from './components/SearchBar';
import { Toaster } from 'react-hot-toast';
import TermsAndConditions from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefundPolicy from './pages/CancellationRefundPolicy';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  
return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      
      <Navbar/>
      <SearchBar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/smart-watches' element={<Smartwatches/>}/>
        <Route path='/shop/headphones' element={<Headphones/>}/>
        <Route path='/shop/earbuds' element={<Earbuds/>}/>
        <Route path='/shop/drones' element={<Drones/>}/>
        <Route path='/shop/accessories' element={<Accessories/>}/>
        <Route path='/shop/combo-offers' element={<Combo/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/termsandcondition' element={<TermsAndConditions/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/shippingpolicy' element={<ShippingPolicy/>}/>
        <Route path='/cancellation-refunds' element={<CancellationRefundPolicy/>}/>
      </Routes>
      <Analytics/>
      <Footer/>
    </div>
  );
};

export default App;