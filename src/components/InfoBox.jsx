import React, { useEffect } from 'react'

export default function InfoBox({labels, dataset, pre_description}) {
    useEffect(()=>{
        // console.log(pre_description)
    }, [labels, dataset, pre_description])
  return (
    <>
        <div className='w-full h-full flex flex-col items-center justify-center max-h-[250px] overflow-y-scroll'>
            <div className='w-full text-[12px]'>{pre_description}</div>
            <div className='w-full grid grid-cols-2' >
                {labels?.map((lbl, i)=>(
                    <div key={i} className='bg-[#ffffff55] rounded-lg m-1 overflow-hidden border-b-[1px] border-b-[#334e91]'>
                        <div className='flex justify-center py-2 text-2xl font-medium bg-[#334e9155] text-[#334e91] rounded-lg shadow-[0px_2px_10px_1px_rgba(0,0,0,.3)]'>{dataset[i]}</div>
                        <div className='flex justify-center text-[10px]'>{lbl.toUpperCase()}</div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
