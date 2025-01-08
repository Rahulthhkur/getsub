import { createContext,useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const currency = '₹';
const deliveryFee = 10;


const ShopContextProvider = ({ children }) => { // Destructure children from props
    const [search, setsearch] = useState('');
    const [showSearch, setshowSearch] = useState(false);
    const value = {
        products,
        currency,
        deliveryFee,
        search,setsearch,showSearch,setshowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {children}  
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;