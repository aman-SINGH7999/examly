import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { increaseCounter, decreaseCounter, resetCounter } from '../redux/slices/counter/counterSlice';
export default function Counter() {
    // const [counters, setCounters] = useState([]);
    const dispatch = useDispatch();
    const counters = useSelector(state=>state.counter);
    const handleIncreaseCounter  = (e) =>{
        e.preventDefault();
        const value = Date.now();
        dispatch(increaseCounter(value))

    }
    const handleDecreaseCounter  = (e) =>{
        e.preventDefault();
        dispatch(decreaseCounter())
    }
    const handleResetCounter  = (e) =>{
        e.preventDefault();
        dispatch(resetCounter())
        
    }
  return (
    <>
        <button onClick={handleIncreaseCounter} className='bg-[#F18B36] px-3 py-1 mx-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Add Counter</button>
        <button onClick={handleDecreaseCounter} className='bg-[#87f136] px-3 py-1 mx-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Remove Counter</button>
        <button onClick={handleResetCounter} className='bg-[#36cff1] px-3 py-1 mx-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)]'>Reset Counter</button>
        <ol className='list-decimal'>
            {
                counters.map((counter)=>(
                    <li id={counter.id} key={counter.id}>{counter.value}</li>
                ))
            }
        </ol>
    </>
  )
}
