import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    Legend,
    Tooltip,
    Filler,
    LineElement,
    LinearScale,
    PointElement,
    ArcElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PiChart from './PiChart';
import { GoDownload } from "react-icons/go";
import { IoIosExpand } from "react-icons/io";
import InfoBox from './InfoBox';
import BasicCard from './BasicCard';
import ActiveExam from './ActiveExam';
import ActiveExamOld from './ActiveExamOld';
import ListCard from './ListCard';

ChartJS.register(
    BarElement,
    LineElement,
    ArcElement,
    LinearScale,
    CategoryScale,
    PointElement,
    Legend,
    Tooltip,
    Filler,
    ChartDataLabels
);
export default function DbCard({ width, contentType, description, data, children, control}) {
    const [description_data, setDescription] = useState("Description");
    const [labels, setLabels] = useState([]);
    const [dataset, setDataset] = useState([]);
    const [src, setSrc] = useState('');
    useEffect(()=>{
        if(description) {
            setDescription(description.substr(0,50)+"....");
        }
        setLabels(data?.labels);
        setDataset(data?.dataset);
        setSrc(data?.src);
    }, [width, contentType, description, data])
    return (
        <>
            <div className={`border-0  flex flex-col overflow-hidden rounded-lg p-3 shadow-lg bg-[#dcecfc] col-span-1 ${width==='1' ? 'sm:col-span-4' : width==='1/2' ? 'sm:col-span-2' : width==='1/3'?'sm:cols-span-1':width==='3/4'?'sm:col-span-3':'sm:col-span-1 row-span-10'}`}>
                <div className='text-[#334e91] font-medium flex gap-2 items-center'>{children}</div>
                <div className='text-[#334E91] my-2 flex-grow items-center'>
                    {
                        contentType === 'image' ? 
                        <BasicCard src={src} /> :
                        contentType === 'info-box'?
                        <InfoBox labels={labels} dataset={dataset} pre_description={data?.pre_description} />:
                        contentType === 'chart-line' ? 
                        <LineChart labels={labels} dataset={dataset} /> : 
                        contentType === 'chart-bar'?
                        <BarChart labels={labels} dataset={dataset}/>:
                        contentType === 'chart-pie'?
                        <PiChart labels={labels} dataset={dataset} />:
                        contentType === 'progress'?
                        <ActiveExam name={data?.name} code={data?.code} type={data?.type} total_time={data?.total_time} total_questions={data?.total_questions} time_spent={data?.time_spent} question_attempted={data?.question_attempted} start_time={data?.start_time} />:
                        contentType === 'progress-old'?
                        <ActiveExamOld name={data?.name} code={data?.code} type={data?.type} total_time={data?.total_time} total_questions={data?.total_questions} time_spent={data?.time_spent} question_attempted={data?.question_attempted} start_time={data?.start_time} />:
                        contentType === 'list-card'?
                        <ListCard dataset={data?.data} action_type={data?.action_type} />:
                        ''
                    }
                </div>
                {description&&description.length>0?<div className='text-[#334E91] text-sm flex-grow mx-2'>{description_data}</div>:''}
                {(control?.download || control?.expand) ? 
                <div className='text-[#334E91] flex justify-end mt-2'>
                    {control?.expand ? 
                        <button className='bg-[#334E91]  px-1 py-1 mx-2 rounded-md active:bg-[#F18B36] text-white shadow-[1px_1px_1px_1px_rgba(0,0,0,.3)] active:shadow-[1px_0px_1px_1px_rgba(0,0,0,.2)]'><IoIosExpand /></button>
                    :''}
                    {control?.download ? 
                        <button className='bg-[#334E91]  px-1 py-1 rounded-md active:bg-[#F18B36] text-white shadow-[1px_1px_3px_1px_rgba(0,0,0,.3)] active:shadow-[1px_1px_0px_1px_rgba(0,0,0,.2)]'><GoDownload /></button>
                    : ''}
                </div>:
                ''}
            </div>
        </>
    );
}
