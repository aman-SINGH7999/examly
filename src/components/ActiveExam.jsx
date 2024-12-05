import React, { useEffect, useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbMoodEmpty } from "react-icons/tb";
import { formatDateTime } from '../utils/helper.funtions';

export default function ActiveExam({ name, code, type, total_time, total_questions, time_spent, question_attempted, start_time }) {
  const [formattedStartTime, setFormattedStartTime] = useState('');
  const [remainingTime, setRemainingTime] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState(0);
  const [progressData, setProgressData] = useState({
    time: {
      value: 0,
      className: '',
    },
    questions: {
      value: 0,
      className: '',
    },
  });

  useEffect(() => {
    const formattedDate = formatDateTime(start_time);
    const remainingTimeInMinutes = total_time - time_spent;
    const remainingQuestionsCount = total_questions - question_attempted;

    setFormattedStartTime(formattedDate);
    setRemainingTime(remainingTimeInMinutes + 'min');
    setRemainingQuestions(remainingQuestionsCount);

    setProgressData((prevData) => ({
      ...prevData,
      time: {
        value: (time_spent / total_time * 100).toFixed(2) + '%',
        className: `w-[${(time_spent / total_time * 100).toFixed(2)}%]`,
      },
      questions: {
        value: (question_attempted / total_questions * 100).toFixed(2) + '%',
        className: `w-[${(question_attempted / total_questions * 100).toFixed(2)}%]`,
      },
    }));
  }, [name, code, type, total_time, total_questions, time_spent, question_attempted, start_time]);

  

  const handleResumeClick = () => {
    // Handle resume click logic here, e.g., dispatching an action or navigating to another screen
    // console.log("Resume test clicked");
  };

  return (
    <>
      {name ? (
        <div className="flex flex-col h-full">
          <div className="flex w-full justify-between">
            <div className="">
              <div className="">
                <span className="text-[20px] font-semibold">{name}</span>
                <sup className="text-[#334E91aa]">({code})</sup>
              </div>
            </div>
          </div>
          <div className="text-[12px] my-1">
            <div className="w-full">
              <span className="w-1/2 inline-block">Total Time: </span>
              <span className="w-1/2 inline-block">{total_time}min</span>
            </div>
            <div className="">
              <span className="w-1/2 inline-block">Remaining Time: </span>
              <span className="w-1/2 inline-block">{remainingTime}</span>
            </div>
            <div className="">
              <span className="w-1/2 inline-block">Total Questions: </span>
              <span className="w-1/2 inline-block">{total_questions}</span>
            </div>
            <div className="">
              <span className="w-1/2 inline-block">Remaining Questions: </span>
              <span className="w-1/2 inline-block">{remainingQuestions}</span>
            </div>
          </div>
          <div className="w-full mb-1 flex-grow">
            <div className="">
              <div className="flex justify-between items-baseline">
                <span className="">Time</span>
                <span className="text-[10px]">{progressData.time.value}</span>
              </div>
              <div className="w-full h-[5px] bg-gray-400">
                <div className={`${progressData.time.className} h-full bg-blue-500`} style={{ width: progressData.time.value, transition: 'width 1s ease-in-out' }}>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-baseline">
                <span className="">Questions</span>
                <span className="text-[10px]">{progressData.questions.value}</span>
              </div>
              <div className="w-full h-[5px] bg-gray-400">
                <div className={`${progressData.questions.className} h-full bg-green-400`} style={{ width: progressData.questions.value,transition: 'width 1s ease-in-out' }}>
                </div>{console.log(progressData)}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="text-[10px]">
              <span className="text-gray-500">Start Time:</span>
              <span className="text-gray-500">{formattedStartTime}</span>
            </div>
            <div className="w-full">
              <button className="w-full bg-[#36cff1] px-3 py-1 my-1 rounded-md active:bg-[#324D92] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_3px_1px_rgba(0,0,0,.2)] flex gap-1 justify-center items-center" onClick={handleResumeClick}>
                <FaRegCirclePlay />Resume Test
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center border-[1px] rounded-md py-2">
          <div className="flex items-center gap-1"><TbMoodEmpty />No Active Exam</div>
        </div>
      )}
    </>
  );
}