import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './component/header.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/product" element={<Product/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
