import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
  return (
    <>
        <form action="#" className='text-center w-1/2'>
            <div className='mb-6 font-semibold text-[20px]'>Login</div>
            <div className='mb-3'>
                <input type="text" className='rounded-md w-full px-3 py-1 outline-none text-[#324D92]' name='' id='' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='mb-6'>
                <input type="password" className='rounded-md w-full px-3 py-1 outline-none text-[#324D92]' name="" id="" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className=''>
                <button className='bg-[#F18B36] px-3 py-1 self-end rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Login</button>
            </div>
        </form>
        <div className='w-full flex justify-center text-xs mt-3'>
            <div className='underline text-[#324D92]'><Link to="/forget-password">Forget Password</Link></div>&nbsp; | &nbsp;
            <div className='underline text-[#324D92]'><Link to="/signup">Register</Link></div>
        </div>
    </>
  )
}
