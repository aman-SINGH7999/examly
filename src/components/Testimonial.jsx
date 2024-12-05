import React from 'react'
import Card from './Card'

export default function Testimonial() {
  return (
    <>
        <h1 className='text-center font-semibold text-3xl italic'>Testimonials</h1>
        <div className='flex flex-wrap justify-center italic'>
            {/* <Card heading={"Personalized Learing Path"} description={"Experience personalized learning at its fitness. Examly's adaptive algo creates a unique learning path tailored to your specific needs, healping you focus on what matters most."}></Card> */}
            <Card image={"./imgs/peq-1.avif"} total_count={3} testimonial={true} rating={4.5} heading={"Devesh Durg (Student)"} description={`"Examly is a lifesaver for studies. It has a vast question bank, practice tests, and detailed explanations. I can track progress and identify areas to focus on. It's helped me improve problem-solving skills."`}></Card>
            <Card image={"./imgs/da-1.avif"} total_count={3} testimonial={true} rating={5} heading={"Sudarshan (Mentor)"} description={`"Examly has been a reliable and easy-to-use tool. I appreciate its intuitive interface and timed exams. The detailed reports have helped me tailor my instruction. I'm confident it will continue to be a valuable asset."`}></Card>
            <Card image={"./imgs/pa-1.jpg"} total_count={3} testimonial={true} rating={4.8} heading={"Kavita Rajan (Student)"} description={`"Examly has made studying fun and effective. Its user-friendly interface and interactive features make learning enjoyable. I can study at my own pace and customize practice sessions. It's boosted my confidence and prepared me for exams."`}></Card>
            {/* <Card image={"./imgs/pa-1.jpg"} total_count={3} testimonial={true} rating={4.8} heading={"Kavita Rajan (Student)"} description={`"Examly has made studying fun and effective. Its user-friendly interface and interactive features make learning enjoyable. I can study at my own pace and customize practice sessions. It's boosted my confidence and prepared me for exams."`}></Card> */}
        </div>
    </>
  )
}
