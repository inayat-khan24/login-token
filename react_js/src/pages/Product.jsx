import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('data'); // ✅ Get token from localStorage
    

      const res = await axios.get('http://localhost:5000/product', {
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
console.log(data)
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold mb-2">{item.title || 'No Title'}</h2>
              <p className="text-sm text-gray-600">
                {item.description || 'No Description'}
              </p>
              <p className="text-blue-500 font-bold mt-2">₹ {item.price || 'N/A'}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;
