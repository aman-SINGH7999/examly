import React, { useContext, useEffect, useState } from 'react'
import DbCard from '../components/DbCard';
import { TfiStatsDown } from "react-icons/tfi"; //progress down
import { FaAdversal } from "react-icons/fa"; // ad showing
import { VscLibrary } from "react-icons/vsc"; // books (library-1)
import { PiNewspaperClipping } from "react-icons/pi"; // paper
import { LuBarChart3 } from "react-icons/lu"; // Bar
import { MdDirectionsBike } from "react-icons/md"; // bike
import { FaAngellist } from "react-icons/fa6"; // victroy
// import { FaAngellist } from "react-icons/fa"; // victory 1
import { FaSnowman } from "react-icons/fa"; // snowman
import { IoCalendarOutline } from "react-icons/io5"; // callender
import { TitleContext } from '../redux/context/TitleContext';

export default function DashBoard() {
  const {setTitle} = useContext(TitleContext)
  useEffect(()=>{
    setTitle('Dashboard');
},[]);
  return (
    // <div className='flex'>
    //     <div className={`${toggleSidebar?'min-w-[50px] max-w-[50px]':'sm:min-w-[200px] sm:max-w-[200px]'} h-screen m-0`}>
    //         <SideBar isCollapsed={toggleSidebar} toggleCollapse={toggleCollapse}></SideBar>
    //     </div>
    //     {/* <div className={`w-full h-screen sm:m-0 ${!toggleSidebar?'ml-[50px]':''}`}> */}
    //     <div className={`flex-grow h-screen ${!toggleSidebar?'ml-[50px] sm:ml-[0px]':''}`}>
    //       <div className='my-[10px] px-[10px] sm:mx-[50px]'>
    //         <div className='text-2xl font-medium text-[#334E91] px-5 py-2 my-2 rounded-lg drop-shadow-md bg-gradient-to-r from-[#dcecfc] from-0% via-[#ffffff00] via-10% '>Dashboard</div>
            // <SubNavBar>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            <DbCard key="6" width="1/3" contentType="progress" description="" data={{
                name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, time_spent:42, question_attempted:39, start_time:new Date()
              }} control={{download: false, expand: false}}>
                <MdDirectionsBike />Active Exam
              </DbCard>
              <DbCard key="6" width="1/3" contentType="progress-old" description="" data={{
                name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, time_spent:42, question_attempted:39, start_time:new Date()
              }} control={{download: false, expand: false}}>
                <MdDirectionsBike />Active Old
              </DbCard>
              <DbCard key="61" width="1/3" contentType="list-card" description="" data={{data:[
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,}
              ], action_type:'show'}} control={{download: false, expand: false}}>
                <FaAngellist />Privious Exams
              </DbCard>
              <DbCard key="62" width="1/3" contentType="list-card" description="" data={{data:[
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100,}
              ], action_type:'proceed'}} control={{download: false, expand: false}}>
                <FaSnowman />Awailable Exams
              </DbCard>
              <DbCard key="63" width="1/3" contentType="list-card" description="" data={{data: [
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, start_time:new Date()},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, start_time:new Date()},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, start_time:new Date()},
                {name:'English', code:'E-543', type:'free', total_time:90, total_questions:100, start_time:new Date()}
              ], action_type:'none'}} control={{download: false, expand: false}}>
                <IoCalendarOutline />Upcoming Exams
              </DbCard>
              <DbCard key="4" width="1/3" contentType="chart-pie" description="" data={{
                'labels':['English', 'Hindi', 'Math', 'Science', 'Sanskrit', 'Games', 'Art', 'Music', 'Yoga', 'test'],
                'dataset':[23,12,56,33, 55, 90, 70, 40, 60, 80]
              }} control={{download: true, expand: true}}>
                <PiNewspaperClipping />Previous Exam (P-214)
              </DbCard>
            <DbCard key="2" width="1/2" contentType="chart-line" description="" data={{
                'labels':['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                'dataset':[65, 59, 80, 81, 56, 55, 40, 34, 28, 61, 75, 46]
              }} control={{download: true, expand: true}}>
                <TfiStatsDown/>Results
              </DbCard>
              <DbCard key="1" width="1/3" contentType="image" description="Masudo me taklif, aapko chahiye ye wala toothpest." data={{src:'./imgs/ye-wala-toothpest.jpeg'}} control={{download: false, expand: true}}>
                <FaAdversal />Advertisement
              </DbCard>
              <DbCard key="5" width="1/3" contentType="info-box" description="" data={{
                'labels': ['Reasoning', 'Maths', 'English', 'Spanish', 'Science'],
                'dataset': [100, 120, 76, 60, 90],
                'pre_description': 'Total numbers of questions have been attempted.',
              }} control={{download: true, expand: true}}>
                <VscLibrary />Subjects
              </DbCard>
              <DbCard key="3" width="1/3" contentType="chart-bar" description="" data={{
                'labels':['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                'dataset':[65, 59, 80, 81, 56, 55, 40, 34, 28, 61, 75, 46]
              }} control={{download: true, expand: true}}>
                <LuBarChart3 />Results
              </DbCard>
              <DbCard key="8" width="1/3" contentType="image" description="Masudo me taklif, aapko chahiye ye wala toothpest." data={{src:'./imgs/ye-wala-toothpest-1.jpeg'}} control={{download: false, expand: true}}>
                <FaAdversal />Advertisement
              </DbCard>
            </div>
            // </SubNavBar>
    //         <div className='mt-5 relative shadow-md rounded-lg'>
    //           <MagicTable />
    //         </div>
            

    //       </div>
    //     <Footer></Footer>
    //     </div>

    // </div>
  )
}
