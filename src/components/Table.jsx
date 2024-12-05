import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io"; // left
import { IoIosArrowForward } from "react-icons/io"; // right
import { TbMoodEmpty } from 'react-icons/tb';

export default function Table({header, body, total_data, page_limit, starting_page, changePage=()=>{}}) {
    const [limit, setLimit] = useState(0);
    const [active_page, setActivePage] = useState(1);
    const [pegination_start, setPeginationStart] = useState(1);
    const [total_pages, setTotalPages] = useState(0);
    const [pegination, setPegination] = useState([]);
    const [visible_data, setVisibleData] = useState([]);
    const handlePaginationClick = (event) => {
        const raw_value = event.target.getAttribute('value');
        if(raw_value && !isNaN(raw_value)) {
            const value = parseInt(raw_value);
            if(value === 0) {
                // do nothing
            } else if(value !== -1 && value !== -2)
                setPeginationStart(value);
            else {
                if(value === -1) {
                    if(pegination_start === 1) {
                        // do nothing
                    } else {
                        setPeginationStart(pegination_start-1);
                    }
                } else if (value === -2) {
                    if (pegination_start === total_pages) {
                        // do nothing
                    } else {
                        setPeginationStart(pegination_start+1);
                    }
                }
            }
        } else {
            // do nothing
        }
    }
    useEffect(()=>{
        if(page_limit) {
            setLimit(parseInt(page_limit));
        } else {
            setLimit(10);
        }
    }, [page_limit])
    useEffect(()=>{
        const visible_dt = body?.slice(0,limit);
        if(visible_dt)
            setVisibleData(visible_dt);
    }, [body, limit])
    useEffect(()=>{
        const pages = Math.ceil(total_data/limit);
        setTotalPages(pages);
    }, [total_data, limit])
    useEffect(()=>{
        if(total_data) {
            if (starting_page > total_pages || starting_page < 1) {
                setPeginationStart(1);
            } else {
                setPeginationStart(starting_page);
            }
        }
    }, [starting_page,total_data, total_pages])
    useEffect(()=>{
        let btns = [];
        if(total_data) {
            if(pegination_start === 1) {
                btns.push(1, 2, 0, total_pages-1, total_pages);
            } else if (pegination_start === 2) {
                btns.push(1, 2, 3, 0, total_pages-1, total_pages);
            } else if (pegination_start === 3) {
                btns.push(1, 2, 3, 4, 0, total_pages-1, total_pages);
            } else if (pegination_start === total_pages) {
                btns.push(1, 2, 0, total_pages-1, total_pages);
            } else if (pegination_start === total_pages-1) {
                btns.push(1, 2, 0, total_pages-2, total_pages-1, total_pages);
            } else if (pegination_start === total_pages-2) {
                btns.push(1, 2, 0, total_pages-3, total_pages-2, total_pages-1, total_pages);
            } else {
                btns.push(1, 2, 0, pegination_start-1, pegination_start, pegination_start+1, 0, total_pages-1, total_pages);
            }
            if (total_pages > 1) {
                btns = [-1, ...btns, -2];
            }
        }
        setPegination(btns);
        setActivePage(pegination_start);
        changePage(pegination_start);
    }, [changePage, total_data, pegination_start, total_pages])
  return (
    <>
        {(total_data && visible_data)?(
            <>
            <div className='relative overflow-x-auto overflow-hidden rounded-t-md border-[1px] border-[#334eaa55] shadow-[0px_0px_5px_#334eaa55]'>
                <table className="w-full text-xs text-left text-gray-500 bg-gray-300">
                    <thead className='text-sm text-gray-700 uppercase font-medium bg-[#dcecfc] sticky border-b-[1px] border-b-[#334eaa55]'>
                        <tr>
                        {header?.map((value, index)=>(<td key={index} scope='col' className='px-6 py-3'>{value}</td>))}
                        </tr>
                    </thead>
                    <tbody className=''>
                        {visible_data?.map((values, index)=>(
                            <tr key={index} className='bg-white border-b hover:bg-[#ffffffaa] hover:transition-all hover:ease-out hover:duration-300'>
                                
                                
                                {Object.keys(values)?.map((key, idx)=>(
                                    <td key={`tbd-${idx}`} scope='row' className={`px-6 py-4 ${idx==0?'font-medium text-gray-900 whitespace-nowrap':''}`}>{values[key]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='flex items-center relative justify-center py-2 gap-1 rounded-b-md border-[1px] border-t-[0px] border-[#334eaa55] bg-[#dcecfc] selection:bg-transparent'>
                {pegination?.map((value, index)=>(
                    <div key={index} className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa] ${value!==0?'active:bg-[#334eaa] active:text-white border-[#334eaa]':'border-[#334eaa55]'} flex items-center justify-center cursor-pointer ${value!==0?active_page===value?'bg-[#334eaa] text-white':'':''}`} value={value} onClick={handlePaginationClick}>{value===-1?<IoIosArrowBack value={-1} />:value===-2?<IoIosArrowForward value={-2} />:value===0?'...':value}</div>
                ))}
                
                {/* <div className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa] active:bg-[#334eaa] active:text-white flex items-center justify-center cursor-pointer ${active_page==='1'?'bg-[#334eaa] text-white':''}`} value="1" onClick={handlePaginationClick}>1</div>
                <div className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa] active:bg-[#334eaa] active:text-white flex items-center justify-center cursor-pointer ${active_page==='2'?'bg-[#334eaa] text-white':''}`} value="2" onClick={handlePaginationClick}>2</div>
                <div className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa55] flex items-center justify-center cursor-pointer`}>...</div>
                <div className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa] active:bg-[#334eaa] active:text-white flex items-center justify-center cursor-pointer ${active_page==='8'?'bg-[#334eaa] text-white':''}`} value="8" onClick={handlePaginationClick}>8</div>
                <div className={`h-[25px] w-[25px] rounded-md border-[1px] border-[#334eaa] active:bg-[#334eaa] active:text-white flex items-center justify-center cursor-pointer ${active_page==='-2'?'bg-[#334eaa] text-white':''}`} value="-2" onClick={handlePaginationClick}><IoIosArrowForward value="-2" /></div> */}
            </div>
            </>
        ):(
            <div className='rounded-md border-[1px] border-[#334eaa55] shadow-[0px_0px_3px_#334eaa55] py-2 flex items-center justify-center gap-1'>
                <TbMoodEmpty />No Data Found
            </div>
        )}
    </>
  )
}
