import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navBar = ["Home","product","Login","Registration"]
    const links = ["/","/product","login","/register",]
  return (
    <div className='contain bg-blue-400 min-h-full'>
     <nav className='px-3 py-4 '>

         <ul className='flex items-center gap-5 text-white font-bold'>
          {
            navBar.map((items,index)=>{
              return <li key={index} >
                <Link to={links[index]}>{items}</Link>
              </li>
            })
          }  

        </ul>
     </nav>
      
    </div>
  )
}

export default Header
