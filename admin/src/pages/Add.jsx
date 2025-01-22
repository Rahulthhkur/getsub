import React from 'react'
import { assets } from '../assets/assets'

const Add = () => {
  return (
   <form className='flex flex-col w-full items-start gap-3' action="
   ">
    <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
            <label htmlFor="image1">
                <img className='w-20' src={assets.upload_area} alt="" />
                <input type="file"  id="image1" hidden />
            </label>
            <label htmlFor="image2">
                <img className='w-20' src={assets.upload_area} alt="" />
                <input type="file"  id="image2" hidden />
            </label>
            <label htmlFor="image3">
                <img className='w-20' src={assets.upload_area} alt="" />
                <input type="file"  id="image3" hidden />
            </label>
            <label htmlFor="image4">
                <img className='w-20' src={assets.upload_area} alt="" />
                <input type="file"  id="image4" hidden />
            </label>
        </div>
    </div>

   </form>
  )
}

export default Add