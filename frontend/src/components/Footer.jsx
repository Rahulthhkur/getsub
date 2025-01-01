import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
     <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32 '/>
            <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim reiciendis, adipisci sed aperiam officiis minima iure, aliquid sapiente accusantium facere, praesentium a porro consectetur mollitia atque fuga quos cupiditate earum? </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5"> Company</p>
            <ul className="flex flex-col text-gray-600 gap-1 ">
            <li>Home</li>    
            <li>About Us</li>
            <li>Delivery</li>
             <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl  font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+1-212-23223-90</li>
                <li>getsub@gmail.com</li>
            </ul>
        </div>
        
     </div>
     <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright @2024 getsub.in - All Right Reserved</p>
            </div>
     </>
  )
}

export default Footer

