import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [showShopMenu, setShowShopMenu] = useState(false);
    const {setshowSearch, getCartCount}= useContext(ShopContext);

    const shopMenuItems = [
        { path: '/shop/smart-watches', label: 'Smart Watches' },
        { path: '/shop/headphones', label: 'Headphones' },
        { path: '/shop/earbuds', label: 'Earbuds' },
        { path: '/shop/drones', label: 'Drones' },
        { path: '/shop/accessories', label: 'Accessories' },
        { path: '/shop/combo-offers', label: 'Combo Offers' }
    ];

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <Link to='/'>
                <img src={assets.logo} className='w-48' alt='' />
            </Link>

            {/* Desktop Menu */}
            <ul className='hidden sm:flex gap-5 text-base text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <div className="relative group">
                    <NavLink to='/shop' className='flex flex-col items-center gap-1'>
                        <p>Shop</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    {/* Desktop Dropdown Menu */}
                    <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
                        {shopMenuItems.map((item, index) => (
                            <NavLink 
                                key={index}
                                to={item.path} 
                                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
{/* 
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink> */}

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Track Order</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            {/* Right Icons */}
            <div className='flex items-center gap-6'>
                <img onClick={()=>setshowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img 
                    onClick={() => setVisible(true)} 
                    src={assets.menu_icon} 
                    className='w-5 cursor-pointer sm:hidden' 
                    alt="" 
                />
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 shadow-xl ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>

                    <NavLink 
                        onClick={() => setVisible(false)} 
                        className='py-2 pl-6 border-b' 
                        to='/'
                    >
                        Home
                    </NavLink>

                    {/* Mobile Shop Dropdown */}
                    <div className='border-b'>
                        <div 
                            className='flex justify-between items-center py-2 pl-6 pr-4 cursor-pointer'
                            onClick={() => setShowShopMenu(!showShopMenu)}
                        >
                            <span>Shop</span>
                            <img 
                                className={`h-3 transition-transform duration-200 ${showShopMenu ? 'rotate-180' : ''}`}
                                src={assets.dropdown_icon} 
                                alt="" 
                            />
                        </div>
                        
                        {/* Mobile Shop Submenu */}
                        <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${showShopMenu ? 'max-h-96' : 'max-h-0'}`}>
                            {shopMenuItems.map((item, index) => (
                                <NavLink 
                                    key={index}
                                    onClick={() => setVisible(false)}
                                    to={item.path}
                                    className='block py-2 pl-10 hover:bg-gray-100'
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <NavLink 
                        onClick={() => setVisible(false)} 
                        className='py-2 pl-6 border-b' 
                        to='/collection'
                    >
                        Collection
                    </NavLink>
                    
                    <NavLink 
                        onClick={() => setVisible(false)} 
                        className='py-2 pl-6 border-b' 
                        to='/about'
                    >
                        About
                    </NavLink>
                    
                    <NavLink 
                        onClick={() => setVisible(false)} 
                        className='py-2 pl-6 border-b' 
                        to='/contact'
                    >
                        Contact
                    </NavLink>

                    <NavLink 
                        onClick={() => setVisible(false)} 
                        className='py-2 pl-6 border-b' 
                        to='/contact'
                    >
                        Track Order
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar