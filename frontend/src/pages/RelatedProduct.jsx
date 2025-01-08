import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProduct = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setrelated] = useState([]);

    useEffect(()=>{
        if(products.length> 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category === item.category);
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory);
            setrelated(productsCopy.slice(0,5));
        }
    }, [products])

  return (
    <div>RelatedProduct</div>
  )
}

export default RelatedProduct