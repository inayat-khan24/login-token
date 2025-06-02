import React, { useContext } from 'react'


import axios from 'axios';
import Rating from './Rating.jsx';
import { CreateStore } from '../store/createStore.jsx';

const Cart = ({image,reviews,rating,originalPrice,price,title,id}) => {
    const  {handleClick,EditSlid,getId,setGetId} = useContext(CreateStore)
     

    const DeleteProduct = async(id)=>{
      const isConfirmed = window.confirm(" do you really want to delete this Product");
     if(isConfirmed){
      try {
      const res = await axios.delete(`http://localhost:5000/product/${id}`)
       
      if (res.status){
        alert ("deleted Product") 
      }
     } catch (error) {
      console.log(eror)
     }   


    }
    
    }


  return (
     
      <div className="bg-white  rounded-2xl shadow-lg p-4 w-50 ">
        <img
          className="w-full h-40  object-contain rounded-xl mb-4"
          src={image}
          alt="HAVIT HV-G92 Gamepad"
        />
        <h1 className="text-lg font-semibold text-gray-800 mb-2">{title.slice(0,15)}...</h1>

        <div className="flex items-center gap-2">
          <h2 className="text-red-500 font-bold text-lg">{`$${price}`}</h2>
          <h2 className="text-gray-500 line-through">{`$${originalPrice}`}</h2>
        </div>
       <Rating
       rating = {rating}
       />

       <div className='flex items-center justify-between'>
<button 
       className='bg-sky-300 hover:bg-sky-400 p-2 rounded-[10px]'
       onClick={()=>EditSlid({image,reviews,title,price,id,originalPrice,rating})}> 
       Edit </button>

       <button 
       className='bg-sky-300 hover:bg-sky-400 p-2 rounded-[10px]'
       onClick={()=>DeleteProduct(id)}> 
       Delete </button>

       </div>
     
      </div>
   
  )
}

export default Cart
