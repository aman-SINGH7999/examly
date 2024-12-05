import React, { useEffect, useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6"; //play icon
import { TbMoodEmpty } from "react-icons/tb"; // empty mood face

export default function ActiveExamOld({name, code, type, total_time, total_questions, time_spent, question_attempted, start_time}) {
    const [sTime, setSTime] = useState('');
    const [tTime, setTTime] = useState('');
    const [sptTime, setSptTime] = useState('');
    const [sptTimeStyle, setSptTimeStyle] = useState(0);
    const [sptTimeClass, setSptTimeClass] = useState('');
    const [rTime, setRTime] = useState('');
    const [tQuestions, setTQuestions] = useState(0);
    const [aQuestions, setAQuestions] = useState('');
    const [aQuestionsStyle, setAQuestionsStyle] = useState(0);
    const [aQuestionsClass, setAQuestionsClass] = useState(0);
    const [rQuestions, setRQuestions] = useState(0);
    useEffect(()=>{
        setSTime(`${formatDateTime(start_time)}`);
        setTTime(`${total_time}min`);
        setSptTime(`${(time_spent/total_time*100).toFixed(2)}%`);
        setSptTimeClass(`w-[${(time_spent/total_time*100).toFixed(2)}%]`);
        setRTime(`${total_time-time_spent}min`);
        setTQuestions(total_questions);
        setAQuestions(`${(question_attempted/total_questions*100).toFixed(2)}%`)
        setAQuestionsClass(`w-[${(question_attempted/total_questions*100).toFixed(2)}%]`);
        setRQuestions(total_questions-question_attempted);
    }, [name, code, type, total_time, total_questions, time_spent, question_attempted, start_time])
    useEffect(()=>{
        animate(sptTime, setSptTimeStyle, 1, 20, 'Time');
        animate(aQuestions, setAQuestionsStyle, 1, 20, 'Question');
        function animate(base, sater, interval=1, speed=300, name='none') {
            if (base && sater) {
              const min = parseFloat(base.split("%")[0]);
              let max = 100;
              const duration = speed * (max - min) / interval; // Total animation duration
          
              let startTime = null;
          
              const intervalObj = setInterval(() => {
                if (!startTime) {
                  startTime = Date.now();
                }
                const elapsedTime = Date.now() - startTime;
                const progress = elapsedTime / duration;
                // Ease-out function (quadratic)
                const easedProgress = progress * progress;
                max = Math.round(max - (max - min) * easedProgress);
                sater(max + "%");
                // console.log(max, min, base, name);
                if (max <= min) {
                  clearInterval(intervalObj);
                }
              }, speed);
            }
        }
    }, [sptTime, aQuestions])
    
    function formatDateTime(date) {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
          day: 'numeric',
          month: 'numeric',
          year: '2-digit'
        };
      
        return new Intl.DateTimeFormat('en-US', options).format(date);
      }
  return (
    <>
        {name?
            <div className='flex flex-col h-full'>
                <div className='flex w-full justify-between'>
                    <div className=''>
                        <div className=''>
                            <span className='text-[20px] font-semibold'>{name}</span>
                            <sup className='text-[#334E91aa]'>({code})</sup>
                        </div>
                    </div>
                </div>
                <div className='text-[12px] my-1'>
                    <div className='w-full'>
                        <span className='w-1/2 inline-block'>Total Time: </span>
                        <span className='w-1/2 inline-block'>{tTime}</span>
                    </div>
                    <div className=''>
                        <span className='w-1/2 inline-block'>Remaining Time: </span>
                        <span className='w-1/2 inline-block'>{rTime}</span>
                    </div>
                    <div className=''>
                        <span className='w-1/2 inline-block'>Total Questions: </span>
                        <span className='w-1/2 inline-block'>{tQuestions}</span>
                    </div>
                    <div className=''>
                        <span className='w-1/2 inline-block'>Remaining Questions: </span>
                        <span className='w-1/2 inline-block'>{rQuestions}</span>
                    </div>
                </div>
                <div className='w-full mb-1 flex-grow'>
                    <div className=''>
                        <div className='flex justify-between items-baseline'>
                            <span className=''>Time</span>
                            <span className='text-[10px]'>{sptTime}</span>
                        </div>
                        <div className='w-full h-[5px] bg-gray-400'>
                            <div className={`${sptTimeClass} h-full bg-blue-500`} style={{
                                width:sptTimeStyle
                            }}>

                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-between items-baseline'>
                            <span className=''>Questions</span>
                            <span className='text-[10px]'>{aQuestions}</span>
                        </div>
                        <div className='w-full h-[5px] bg-gray-400'>
                            <div className={`${aQuestionsClass} h-full bg-green-400`} style={{
                                width: aQuestionsStyle,
                            }}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='text-[10px]'>
                        <span className='text-gray-500'>Start Time:</span>
                        <span className='text-gray-500'>{sTime}</span>
                    </div>
                    <div className='w-full'>
                        <button className='w-full bg-[#36cff1] px-3 py-1 my-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)] flex gap-1 justify-center items-center'><FaRegCirclePlay />Resume Test</button>
                    </div>
                </div>
            </div>
        :
            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex items-center gap-1'><TbMoodEmpty />No Active Exam</div>
            </div>
        }
    </>
  )
}
