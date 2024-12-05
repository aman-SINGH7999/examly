import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { PiExam } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";
import { VscHistory } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function SideBar({isCollapsed, toggleCollapse}) {
  return (
    <>
        <div id='sidebar' className={`z-10 h-screen bg-[#dcecfc] ${isCollapsed?'w-[50px]': 'w-[200px]'} drop-shadow-md fixed `}>
            <div className='w-full bg-[#dcecfc] h-[60px] flex justify-center items-center drop-shadow-lg'>
                <Link to='/' id='logo'>
                    <img src="./imgs/logo-2.png" alt="Examly" className={`h-8 cursor-pointer mx-auto ${isCollapsed?'hidden':'block'}`} />
                    <img src="./imgs/logo-2-small.png" alt="Examly" className={`h-8 cursor-pointer mx-auto ${isCollapsed?'block':'hidden'}`} />
                </Link>
            </div>
            <div className={`w-full bg-[#dcecfc] flex-grow px-2 py-10 ${isCollapsed?'space-y-10':'space-y-5'}`}>
                <div className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2 text-red-600'><FaRegCircleUser/></span>
                    <span className={isCollapsed?'hidden':'block'}>Student Name</span>
                </div>
                <Link to="/dashboard" className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><RxDashboard/></span>
                    <span className={isCollapsed?'hidden':'block'}>Dashboard</span>
                </Link>
                <Link to="/components" className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><RxDashboard/></span>
                    <span className={isCollapsed?'hidden':'block'}>Components</span>
                </Link>
                <Link to="/exams" className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><PiExam /></span>
                    <span className={isCollapsed?'hidden':'block'}>Exams</span>
                </Link>
                <Link to="/progress" className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><VscGraphLine/></span>
                    <span className={isCollapsed?'hidden':'block'}>Progress</span>
                </Link>
                <div className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><VscHistory/></span>
                    <span className={isCollapsed?'hidden':'block'}>History</span>
                </div>
                <div className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><IoSettingsOutline/></span>
                    <span className={isCollapsed?'hidden':'block'}>Settings</span>
                </div>
                <div className={`flex items-center ${isCollapsed?'':'mx-3'} cursor-pointer`}>
                    <span className='mx-2'><CiLogout/></span>
                    <span className={isCollapsed?'hidden':'block'}>Logout</span>
                </div>
            </div>
            <div className='fixed top-1/2 h-10 w-10 left-[100%]  flex items-center justify-left cursor-pointer' onClick={toggleCollapse}>
                <div className=''>{isCollapsed?<IoIosArrowForward/>:<IoIosArrowBack/>}</div>
            </div>
        </div>
    </>
  )
}
