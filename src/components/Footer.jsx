import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='w-full bg-[#324D90] text-white lg:px-20 sm:px-10 px-5 py-5'>
            <div className='flex flex-wrap justify-center w-full'>
                <div className='w-full sm:w-1/2'>
                    <div className=''>
                        <img className='w-1/3' src="./imgs/logo-3.png" alt="" />
                    </div>
                    <div>
                        <form action="#">
                            <div className='my-3'>
                                <input type="text" className='rounded-md w-1/2 px-3 py-1 outline-none text-[#324D92]' placeholder='example@email' />
                                <button className='bg-[#F18B36] px-3 py-1 mx-3 self-end rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>News Later</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-full sm:w-1/4'>
                    <div><a href="./">Home</a></div>
                    <div><a href='./about'>About</a></div>
                    <div><a href="./contact">Contact Us</a></div>
                    <div><a href="./register">Register</a></div>
                </div>
                <div className='w-full sm:w-1/4'>
                    <div><a href="https://linkedin.com">LinkedIn</a></div>
                    <div><a href="https://x.com">Twitter (X.com)</a></div>
                    <div><a href="https://facebook.com">Facebook</a></div>
                    <div><a href="https://github.com">Github</a></div>
                </div>
            </div>
            <div className='w-full text-center border-t-[1px] mt-5 text-[10px] py-2 font-[#dcecfc]'>
                Copyrigh &copy; 2024 Examly Pvt. Ltd. All rights reserved
            </div>
        </div>
    </>
  )
}
