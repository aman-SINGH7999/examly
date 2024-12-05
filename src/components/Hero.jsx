import React from 'react'

export default function Hero() {
  return (
    <>
        <div className='flex h-96 flex-col-reverse sm:flex-row'>
            <div className='lg:w-1/3 w-full h-full flex flex-col justify-center overflow-visible'>
                <div className='text-[#334E91] font-bold text-5xl' id="chintu">Examly!</div>
                <div className='text-[#000] font-bold text-3xl' id="chintu">Where learning meets testing.</div>
                <div className='text-[#000]  text-1xl' id="chintu">Your one-stop plateform for all your exam needs. Whether you're student, teacher, or institution, we offer seamless and secure environment for creating, taking, and managing exam.</div>
            </div>
            <div className='lg:w-2/3 w-full h-full bg-cover bg-bottom'style={{"background-image": "url('./imgs/hero-1.jpg')"}}></div>
        </div>
    </>
  )
}
