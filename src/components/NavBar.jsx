import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  
  return (
    <>
        <div className='flex justify-between items-center lg:px-20 py-5 bg-[#ffffff] sm:px-10 px-5'>
            <Link to='/' id='logo'><img src="./imgs/logo-2.png" alt="Examly" className='h-8 cursor-pointer' /></Link>
            <Link to='/login' id='login-signup'>
                <button className='bg-[#F18B36] px-3 py-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Login</button>
            </Link>
        </div>
    </>
  )
}
