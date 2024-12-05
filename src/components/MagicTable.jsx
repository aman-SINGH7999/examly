import React, { useEffect, useState } from 'react'
import { ImTable2 } from "react-icons/im";
import { BiTable } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import Table from './Table'
import Dropdown from './Dropdown'
import SearchBox from './SearchBox';

export default function MagicTable({title, enable_search, enable_dropdown, is_compact, dataset, changePage, getSelected, getFilter}) {
    const [select, setSelect] = useState('');
    useEffect(()=>{
        console.log("select", select);
    }, [select])
  return (
    <>
        <div className='px-2 rounded-md text-[#334eaa] overflow-hidden w-full'>
            {(title || enable_search || enable_dropdown)?(<div className={`px-4 ${is_compact?'py-1':'py-2 bg-[#dcecfc]'}`}>
                {(title && !is_compact)?(<div className='text-[20px] font-semibold flex items-center gap-1'><CiBoxList />{title}</div>):''}
                <div className={`flex pb-2 justify-between ${is_compact?'my-0':'my-2'} gap-2`}>
                    <div className=''>
                        {enable_search?(<SearchBox getSearchText={getFilter} />):''}
                    </div>
                    <div className=''>
                        {enable_dropdown?(<Dropdown items={[{label: 'English', value: "eng"}, {label: 'Hindi', value: "hi"}, {label: 'Maths', value: "mth"}, {label: 'Yoga', value: "yog"},]} getSelected={getSelected} />):''}
                    </div>
                </div>
            </div>):''}
            <div className=' bg-white rounded-md w-full overflow-hidden'>
                <Table header={dataset?.header} body={dataset?.body} total_data={dataset?.total_data} page_limit={dataset?.page_limit} starting_page={dataset?.starting_page} changePage={changePage} />
            </div>
        </div>
    </>
  )
}
