import React, { useEffect } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { formatDateTime } from '../utils/helper.funtions';

export default function ListCard({dataset, action_type}) {
  return (
    <>
        <div className='w-full h-full flex flex-col gap-y-1 max-h-[250px] overflow-y-scroll overflow-x-clip'>
            {
                dataset?.map((data, index)=>(
                    <div className='w-full border-[1px] box-border bg-white flex px-2 rounded-sm justify-between items-center transition ease-in-out delay-100 hover:delay-0 hover:font-semibold hover:shadow-[inset_0px_0px_5px_rgba(51,78,145,0.5)] hover:border-[#334E91aa]' key={index}>
                        <div className=''>
                            <div className='font-semibold'>{data.name}</div>
                            <div className='text-[#334E91aa] text-[10px]'>({data.code})</div>
                        </div>
                        <div className='text-[12px]'>
                            <div className=''>
                                <span>Time: </span>
                                <span>{data.total_time}</span>
                            </div>
                            <div className=''>
                                <span>Questions: </span>
                                <span>{data.total_questions}</span>
                            </div>
                        </div>
                        <div className=' overflow-hidden'>
                            {
                                action_type!=='none'?
                                <button className='bg-[#334E91]  px-1 py-1 mx-2 rounded-md active:bg-[#F18B36] text-white shadow-[1px_1px_1px_1px_rgba(0,0,0,.3)] active:shadow-[1px_0px_1px_1px_rgba(0,0,0,.2)]'>{action_type=='proceed'?<MdDoubleArrow />:action_type=='show'?<IoEye />:''}</button>
                                :
                                <div className='text-[10px]'>
                                    {/* <span>Start Time: </span> */}
                                    <div>{formatDateTime(data.start_time).split(',')[1]}</div> {/** need to write ligic to brek and make two line info */}
                                    <div>{formatDateTime(data.start_time).split(',')[0]}</div>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}
