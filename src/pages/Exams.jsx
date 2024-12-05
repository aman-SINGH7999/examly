import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import MagicTable from '../components/MagicTable';
import SubMenu from '../components/SubMenu';
import DbCard from '../components/DbCard';
import { MdDirectionsBike } from 'react-icons/md';
import { exams } from '../utils/fake.data';
import SubNavBar from '../components/SubNavBar';
import { TitleContext } from '../redux/context/TitleContext';

export default function Exams({title}) {
    // const [toggleSidebar, setToggleSidebar] = useState(false);
    const [tab, setTab] = useState(0);
    const [page_data, setPageData] = useState([]);
    const {setTitle} = useContext(TitleContext)
    useEffect(()=>{
        setTitle(title?title:'Exams');
    },[]);
    function selectTab(page) {
        if (page === 0) {
            setTab(page)
        } else if (page === 1) {
            setTab(page)
        } else if (page === 2) {
            setTab(page)
        }
    }
    useEffect(()=>{
        if (tab === 0) {
            setPageData(exams.available_exams);
        } else if (tab === 1) {
            setPageData(exams.previous_exams);
        } else if (tab === 2) {
            setPageData(exams.upcoming_exams);
        }
        
        // console.log("PDT>>>", page_data?.data)
    }, [tab])
  return (
    <>
        {/* <div className='flex'>
            <div className={`${toggleSidebar?'min-w-[50px] max-w-[50px]':'sm:min-w-[200px] sm:max-w-[200px]'} h-screen m-0`}>
                <SideBar isCollapsed={toggleSidebar} toggleCollapse={toggleCollapse}></SideBar>
            </div>
            <div className={`flex-grow h-screen w-full overflow-x-auto ${!toggleSidebar?'ml-[50px] sm:ml-[0px]':''}`}>
                <div className='my-[10px] px-[10px] sm:mx-[50px]'>
                    <div className='text-2xl font-medium text-[#334E91] px-5 py-2 my-2 rounded-lg drop-shadow-md bg-gradient-to-r from-[#dcecfc] from-0% via-[#ffffff00] via-10% '>Exams</div>
                    <div className='w-full rounded-md overflow-hidden my-3 flex flex-col gap-5'> */}
                        {/* <SubNavBar> */}
                        <div className=''>
                            <DbCard key="6" width="1/3" contentType="progress" description="" >
                                <MdDirectionsBike />Active Exam
                            </DbCard>
                        </div>
                        <div className=''>
                            <SubMenu getTab={selectTab}>
                                <MagicTable enable_dropdown={true} enable_search={true} is_compact={true} title={'Ankur'} changePage={(v)=>{console.log("pg: ", v)}} getFilter={(v)=>{console.log("vt: ",v)}} getSelected={(v)=>{console.log("sd: ",v)}} dataset={{
                                    header: page_data?.title,
                                    body: page_data?.data,
                                    total_data: page_data?.data?.length,
                                    page_limit: 7,
                                    starting_page: 1,
                                }} />
                            </SubMenu>
                        </div>
                        {/* </SubNavBar> */}
                    {/* </div>
                </div>
            </div>
        </div> */}
    </>
  )
}
