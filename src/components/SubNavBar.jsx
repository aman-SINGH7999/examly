import React, { useContext, useEffect, useState } from 'react'
import SideBar from './SideBar';
import { TitleContext } from '../redux/context/TitleContext';
import Footer from './Footer';

export default function SubNavBar({children}) {
    const {title} = useContext(TitleContext)
    const [toggleSidebar, setToggleSidebar] = useState(false);
    useEffect(()=>{
        if(window.innerWidth<640) {
        setToggleSidebar(true);
        }
    },[]);
    function toggleCollapse() {
        setToggleSidebar(!toggleSidebar);
    }
    return (
        <>
            <div className='flex'>
                <div className={`${toggleSidebar?'min-w-[50px] max-w-[50px]':'sm:min-w-[200px] sm:max-w-[200px]'} h-screen m-0`}>
                    <SideBar isCollapsed={toggleSidebar} toggleCollapse={toggleCollapse}></SideBar>
                </div>
                <div className={`flex-grow h-screen w-full overflow-x-auto ${!toggleSidebar?'ml-[50px] sm:ml-[0px]':''}`}>
                    <div className='my-[10px] px-[10px] sm:mx-[50px]'>
                        <div className='text-2xl font-medium text-[#334E91] px-5 py-2 my-2 rounded-lg drop-shadow-md bg-gradient-to-r from-[#dcecfc] from-0% via-[#ffffff00] via-10% '>{title}</div>
                        <div className='w-full rounded-md overflow-hidden my-3 flex flex-col gap-5'>
                            {children}
                        </div>
                    </div>
                    <div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}
