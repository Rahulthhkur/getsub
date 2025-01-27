import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const {
    setshowSearch,
    getCartCount,
    navigate,
    token,
    settoken,
    setcartItems,
  } = useContext(ShopContext);

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      toast.success("Logout Successfully")
      settoken("");
      setcartItems({});
      navigate("/login");
    }
  };

  const shopMenuItems = [
    { path: "/shop/smart-watches", label: "Smart Watches" },
    { path: "/shop/headphones", label: "Headphones" },
    { path: "/shop/earbuds", label: "Earbuds" },
    { path: "/shop/drones", label: "Drones" },
    { path: "/shop/accessories", label: "Accessories" },
    { path: "/shop/combo-offers", label: "Combo Offers" },
  ];

  const ShopDropdown = ({ items }) => (
    <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-50">
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/" aria-label="Home">
        <img src={assets.logo} className="w-48" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-base text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>

        <div className="relative group">
          <NavLink to="/shop" className="flex flex-col items-center gap-1">
            <p>Shop</p>
          </NavLink>
          <ShopDropdown items={shopMenuItems} />
        </div>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Track Order</p>
        </NavLink>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => setshowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
          aria-label="Search"
        />

        {/* Profile */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
            aria-label="Profile"
          />
            {token && (<div className="absolute hidden group-hover:block dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=> navigate('/order')} className="cursor-pointer hover:text-black">Orders</p>
                <p
                  onClick={logout}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>)}
    
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative" aria-label="Cart">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
          aria-label="Menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 shadow-xl ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back Icon"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/"
          >
            Home
          </NavLink>

          <div className="border-b">
            <div
              className="flex justify-between items-center py-2 pl-6 pr-4 cursor-pointer"
              onClick={() => setShowShopMenu(!showShopMenu)}
            >
              <span>Shop</span>
              <img
                className={`h-3 transition-transform duration-200 ${
                  showShopMenu ? "rotate-180" : ""
                }`}
                src={assets.dropdown_icon}
                alt="Dropdown Icon"
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 bg-gray-50 ${
                showShopMenu ? "max-h-96" : "max-h-0"
              }`}
            >
              {shopMenuItems.map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => setVisible(false)}
                  to={item.path}
                  className="block py-2 pl-10 hover:bg-gray-100"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/contact"
          >
            Contact
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-b"
            to="/contact"
          >
            Track Order
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
