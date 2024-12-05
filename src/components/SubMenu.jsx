import React, { useEffect, useState } from 'react'

export default function SubMenu({getTab, children}) {
    const [active, setActive] = useState(2);
    const handleClick = (event) => {
        const raw_value = event.target.getAttribute('value');
        if (raw_value && !isNaN(raw_value)) {
            const value = parseInt(raw_value);
            setActive(value);
        }
    }
    useEffect(()=>{
        getTab(active);
    }, [getTab, active])
  return (
    <>
        <div className='flex justify-around w-full bg-white'>
            <div className={`${active===0?'bg-[#334E91] rounded-tl-md':''} w-full`}>
                <div className={`${active===0?'bg-white text-[#334E91] border-l-[1px] border-t-[1px] rounded-tr-md':`bg-[#334E91] text-white border-b-1 hover:bg-[#334E91ee] ${active===1?'rounded-br-md':''}`} w-full px-3 py-2 font-semibold border-[#334E91] cursor-pointer overflow-hidden rounded-tl-md`} value="0" onClick={handleClick}>Available Exams</div>
            </div>
            <div className={`${active===1?'bg-[#334E91]':''} w-full`}>
                <div className={`${active===1?'bg-white text-[#334E91] border-t-[1px] rounded-tl-md rounded-tr-md':`bg-[#334E91] text-white border-b-1 hover:bg-[#334E91ee] ${active===0?'rounded-bl-md':active===2?'rounded-br-md':''}`} w-full px-3 py-2 font-semibold border-[#334E91] cursor-pointer overflow-hidden`} value="1" onClick={handleClick}>Previous Exams</div>
            </div>
            <div className={`${active===2?'bg-[#334E91] rounded-tr-md':''} w-full`}>
                <div className={`${active===2?'bg-white text-[#334E91] border-t-[1px] border-r-[1px] rounded-tl-md':`bg-[#334E91] text-white border-b-1 hover:bg-[#334E91ee] ${active===1?'rounded-bl-md':''}`} w-full px-3 py-2 font-semibold border-[#334E91] cursor-pointer overflow-hidden rounded-tr-md`} value="2" onClick={handleClick}>Upcoming Exams</div>
            </div>
        </div>
        <div className='flex flex-grow w-full p-2 border-l-[1px] border-b-[1px] border-r-[1px] rounded-b-md border-[#334E91]'>
            {children}
        </div>
    </>
  )
}
