import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', user);
   
  
      if (res.status === 200) {
        alert('Login successful');

        // ✅ Save token to localStorage
       const token =  localStorage.setItem('token', res.data.data);
      

        navigate('/product');
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Login failed. Check email or password.');
    }

    // Reset form
    setUser({
      email: '',
      password: ''
    });
  };

  return (
    <div className="bg-[#c4b4b4] min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md p-6 shadow-md w-full max-w-md">
        <h1 className="text-center font-bold text-xl mb-4 text-[#427e96]">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-sky-500 text-white py-2 font-bold rounded-md hover:bg-sky-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
