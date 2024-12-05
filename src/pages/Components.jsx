import React, { useContext, useEffect } from 'react'
import { TitleContext } from '../redux/context/TitleContext';
import Card from '../components/Card';
import ActiveExam from '../components/ActiveExam';

export default function Components({title}) {
    const {setTitle} = useContext(TitleContext)
    useEffect(()=>{
        setTitle(title?title:'Components');
    },[]);
  return (
    <>
        <div className='card-components flex-row sm:flex'>
            <Card heading={"Card"} description={"This is a card"} image={""} rating={5} testimonial={false} total_count={0} />
            <ActiveExam name={'Fake Exam'} />
        </div>
    </>
  )
}
