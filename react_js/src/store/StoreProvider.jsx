import React, { useState } from 'react'
import { CreateStore } from './createStore'


const StoreProvider = ({children}) => {

    const handleClick = (rating) => {
    setSelectedStar(rating);
    console.log('User selected rating:', rating);
  };

  /// for hovert rating and set value
const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);
    const totalStars = 5;

    // useSate of product list
     const [productList, setProductList] = useState({
        title: "",
        price: "",
        originalPrice: "",
        discount: "",
        image: "",
        rating: "",
        reviews: ""
      });
    
    // edit image slid bar 
    const [getId,setGetId] = useState("")
    const EditSlid =  ({image,title,price,id,originalPrice,rating,reviews})=>{
      setGetId(id)
      setProductList(
        {
        title,
        price,
        originalPrice,
        image,
        rating,
        reviews,
      }
      )
   
      
    }


     


    
    

  return (
    <CreateStore.Provider value={{
        handleClick, totalStars,
        hoveredStar, setHoveredStar,
        selectedStar, setSelectedStar,
        EditSlid,setGetId,getId,
        productList, setProductList,
        
        // rating,
        // reviews,
        }}>
    {children}
    </CreateStore.Provider>
  )
}

export default StoreProvider
