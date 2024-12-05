import React, { useContext, useEffect } from 'react'
import SubNavBar from '../components/SubNavBar'
import { TitleContext } from '../redux/context/TitleContext';
import DbCard from '../components/DbCard';
import { TfiStatsDown } from 'react-icons/tfi';

export default function Progress() {
  const {setTitle} = useContext(TitleContext);
  useEffect(()=>{
    setTitle('Progress')
  },[])
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            <DbCard key="2" width="1" height="1/2" contentType="chart-line" description="" data={{
                'labels':['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                'dataset':[65, 59, 80, 81, 56, 55, 40, 34, 28, 61, 75, 46]
              }} control={{download: true, expand: true}}>
                <TfiStatsDown/>Results
            </DbCard>
        </div>
    </>
  )
}
