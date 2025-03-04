import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const currency = "₹";
const deliveryFee = 49;
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ShopContextProvider = ({ children }) => {
  const [search, setsearch] = useState("");
  const [showSearch, setshowSearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const [products, setProducts] = useState([])
  const [token, settoken] = useState('')
  const navigate = useNavigate();
  

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    else{
      toast.success("Product added to Cart");
    }

    
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartItems(cartData);

    if(token){
      try {
        await axios.post(backendUrl+ '/api/cart/add',{itemId,size},{headers:{token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };


  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setcartItems(cartData);

    if (token) {
      try {
        await axios.post(backendUrl+ '/api/cart/update', {itemId,size,quantity}, {headers:{token}})

      } catch (error) {
         console.log(error);
        toast.error(error.message)
      }
    }

  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {

        }
      }
    }
    return totalAmount;
  }
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl+'/api/product/list');
        if(response.data.success){
          setProducts(response.data.products)
        }
        else{
          toast.error(response.data.message)
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};

const getUserCart = async (token)=>{
    try {
      const response = await axios.post(backendUrl+'/api/cart/get', {}, {headers:{token}})
      if (response.data.success) {
        setcartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
        toast.error(error.message)
    }
}

useEffect(() => {
    getProductsData();
}, []);

useEffect(()=>{
  if(!token && localStorage.getItem('token')){
    settoken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'))
  }
},[])

useEffect(() => {
  if (token) {
      getUserCart(token);
  }
}, [token]);


  const value = {
    products,
    backendUrl,
    currency,
    deliveryFee,
    search,
    setsearch,
    showSearch,
    setshowSearch,
    cartItems,
    addToCart,
    getCartCount, updateQuantity, getCartAmount, navigate, settoken,token,setcartItems
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
