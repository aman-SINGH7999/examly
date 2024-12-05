import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings'

export default function Card({heading, description, image, testimonial, rating, total_count}) {
    const [h, setHeading] = useState("");
    const [d, setDescription] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [total_cards, setCardCount] = useState('w-auto');
    useEffect(()=>{
        setHeading(heading);
        if(total_count)
            setCardCount(`w-1/${total_count+1}`);
        if (!testimonial)
            if(description.length>100)
                setDescription(description.substr(0,100)+"[Read More]");
            else
                setDescription(description.substr(0,100));
        else 
            setDescription(description) ;
    }, [])
    function loadFullText(e) {
        if (!expanded && e.target.innerText.length>100) {
            setDescription(description)
            e.target.innerText = "[Hide Text]";
            setExpanded(true);
        } else {
            setDescription(description.substr(0,100));
            if(description.length>100)
            e.target.innerText = "[Read More]";
            setExpanded(false);
        }
    }
    
  return (
    <div className={`rounded-xl sm:${total_cards} w-full overflow-hidden mx-3 my-6 grid border-[1px]`}>
        {!testimonial?<><div className='overflow-hidden'>
                <img src={image} alt="" />
            </div>
            <div className='bg-[#DCECFC] px-2 py-2 text-[#324D92] font-semibold'>{h}</div></>
        :null}               
        <div className={`bg-white px-3 py-2 text-justify ${testimonial?'h-auto':'h-full'} overflow-hidden`}>
            {d}&nbsp;
            {!testimonial?<span className='text-[12px] underline text-blue-700 cursor-pointer' onClick={loadFullText}></span>:null}
        </div>
        {testimonial?
            <div className='self-end'>
            <div className='px-2 py-1 bottom-0'>
                <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="3px"
                starRatedColor="#F18B36"
            />
            </div>
            <div className='bg-[#DCECFC] px-2 py-2 text-[#324D92] font-semibold'>{h}</div>
            </div> 
        : null }
    </div>
  )
}
