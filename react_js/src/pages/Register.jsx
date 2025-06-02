import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [user,setUser] = useState({
        name :"",
        email : "",
        password:""
    })
const neviget = useNavigate()
  const handleChange =(e)=>{
   setUser({...user,[e.target.name]: e.target.value})
    }

  
    const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
   const res =  await axios.post("http://localhost:5000/register",user)
   if(res.status === 201){
    alert("this form created succesfully")
   neviget("/login")
   }
   console.log(res)
  } catch (error) {
    console.log(error)
  }
  setUser({
        name :"",
        email : "",
        password:""
    })

    }
  return (
    <div className='bg-[#c4b4b4] min-h-screen flex  items-center justify-center'>
    
        <div className='box bg-[white] flex flex-col   rounded-[4px] p-4 h-[350px] shadow-md w-[400px]'>
            <h1 className='text-center font-bold '>Registation</h1>
            <form action="" method='POST' onSubmit={handleSubmit} className='flex flex-col h-full justify-around '>
                <div className='flex flex-col'>
                    <label htmlFor="name" className=''> Name </label>
                    <input type="text"
                    value={user.name}
                    onChange={handleChange}
                     className='p-1 border rounded-[4px] border-gray-500 focus:outline-none' 
                     name='name' placeholder='Enter Name' required />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className=''> Email </label>
                    <input type="email"
                    value={user.email}
                    onChange={handleChange}
                     name='email' 
                      className='p-1 border rounded-[4px] border-gray-500 focus:outline-none'
                      placeholder='Enter Email' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className=''> Password </label>
                    <input type="password"
                    value={user.password}
                    onChange={handleChange}
                      className='p-1 border rounded-[4px] border-gray-500 focus:outline-none'
                     name='password' 
                     placeholder='Enter Password' />
                </div>
         <button className='bg-sky-500 text-white p-2  rounded-[2px] font-bold hover:bg-sky-600 transition '>Register</button>

            </form>

        </div>
    
    </div>
  )
}

export default Register
