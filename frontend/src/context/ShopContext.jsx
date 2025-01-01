import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const currency = '₹';
const deliveryFee = 10;

const ShopContextProvider = ({ children }) => { // Destructure children from props
    const value = {
        products,
        currency,
        deliveryFee
    };

    return (
        <ShopContext.Provider value={value}>
            {children}  
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;