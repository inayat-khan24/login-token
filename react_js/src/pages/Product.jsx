import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CreateStore } from '../store/createStore.jsx';
import Cart from '../component/Cart.jsx';

const Product = () => {
  const [data, setData] = useState([]);
const {getId,productList, setProductList} = useContext(CreateStore)

  
const [productItems,setProductItems] = useState([])
const [isLoading,setIsLoading]= useState(true)



  const handleInput = (e) => {
    setProductList({
      ...productList,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
        try {
const  res = await axios.put(`http://localhost:5000/product/${getId}`,productList)
console.log("update successful",res.data)
setProductList({
     title: "",
    price: "",
    originalPrice: "",
    image: "",
    rating: "",
    reviews: "",
    
})

        
    } catch (error) {
        console.error("Update failed:", error);

  };

}

// fetch data 
const productFetch = async()=>{
try {
    const res = await axios.get("http://localhost:5000/product")
    
    setIsLoading(false)
    setProductItems(res.data)
    
} catch (error) {
//  console.log(error)   
}
}

// add product

const addProduct = async()=>{
try {
    const res = await axios.post(`http://localhost:5000/product`,productList)
    if(res.status === 201){
        alert ("Product Upload successful")
    }
} catch (error) {
    console.log(error)
    
}

// clear input field after upload successful
setProductList({
     title: "",
    price: "",
    originalPrice: "",
    image: "",
    rating: "",
    reviews: "",
    
})


}



useEffect(()=>{
productFetch()

},[])

console.log(productItems)


  const fetchData = async () => {
    try {
      const token = localStorage.getItem('data'); // ✅ Get token from localStorage
    

      const res = await axios.get('http://localhost:5001/items', {
        headers: {
          Authorization: `${token}`, // ✅ Send token in headers
        },
      });

      setData(res);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      alert(error.response?.data?.message || 'Unauthorized: Please login first');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen p-8 flex justify-between bg-[#d8adb4]'>
{/* // section one */}
<div className='w-[70%] flex flex-wrap gap-4 max-h-95 mr-4 overflow-auto'>
{
productItems.map(({image,reviews,rating,originalPrice,price,title,_id},index)=>{
return <Cart
 key={index} 
 image={image} 
 title={title}
 price={price} 
 id={_id}
 originalPrice={originalPrice}
 
 rating = {rating }
reviews = {reviews}
 
 />
})

}
</div>


    {/* // section two  */}
<div 
    className='container w-[30%] max-h-[500px] flex flex-col p-2 rounded-2xl items-center justify-center min-w-sm bg-[skyblue] '>
     <h2 className='mb-4 font-bold'>Dash Board</h2>
   
     <form action="" onSubmit={handleSubmit}  className='px-4'>
<input type="text"
 name='title' 
 value={productList.title}
 onChange={handleInput}
 className='bg-white  border-b-2 border-amber-300 mb-2 w-full p-2 focus:outline-none'
  placeholder='Enter Title'/>

  <input 
  type="number"
  onChange={handleInput}
   name='price' 
   value={productList.price}
 className='bg-white border-b-2 border-amber-300 mb-4 w-full p-2 focus:outline-none'

  placeholder='Enter Prince'/>

 <input 
  type="number"
  onChange={handleInput}
   name='originalPrice'
   value={productList.originalPrice} 
 className='bg-white border-b-2 border-amber-300 mb-4 w-full p-2 focus:outline-none'
 placeholder='Enter OriginalPrice'/>



 <input type="text"
 name='image' 
 value={productList.image}
 onChange={handleInput}
 className='bg-white  border-b-2 border-amber-300 mb-2 w-full p-2 focus:outline-none'
  placeholder='Enter Image URL'/>

  <input 
  type="number"
  onChange={handleInput}
   name='rating' 
   value={productList.rating}
 className='bg-white border-b-2 border-amber-300 mb-4 w-full p-2 focus:outline-none'
 placeholder='Enter Rating'/>

  <input 
  type="text"
  onChange={handleInput}
   name='reviews' 
   value={productList.reviews}
 className='bg-white border-b-2 border-amber-300 mb-4 w-full p-2 focus:outline-none'
 placeholder='Enter Reviews'/>
  <button className='bg-sky-600 w-full text-white p-2 border-none rounded-[4px]'>Update</button>
</form>
<button 
onClick={addProduct}
className='bg-sky-600 w-full mt-4 text-white p-2 border-none rounded-[4px]'>Submit</button>
</div>  






   </div>
  );
};

export default Product;
