import React, { useEffect, useState } from 'react'

export default function ContactUs() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  return (
    <>
        <div className='w-full bg-[#324D90] my-10 flex'>
            <div className='w-full sm:w-2/3 lg:w-1/2 py-20 px-10 sm:px-16 text-white text-justify'>
                <div className='text-lg font-semibold px-5 py-1'>Contact Us</div>
                <div className='text-end'>
                    <form action="#">
                        <div className='my-3'>
                            <input type="text" className='rounded-md w-full px-3 py-1 outline-none text-[#324D92]' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                        </div>
                        <div>
                            <textarea name="" id="" className='rounded-md w-full px-3 py-1 h-[200px] text-[#324D92]' placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>
                        <div className='mt-2'>
                            <button className='bg-[#F18B36] px-3 py-1 self-end rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='sm:w-1/3 lg:w-1/2 hidden sm:block'>
                <img className='object-cover h-full' src="./imgs/contact-us-4.jpg" alt="About" />
            </div>
        </div>
    </>
  )
}
