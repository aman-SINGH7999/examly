import React from 'react'
import Card from './Card'

export default function Features() {
  return (
    <>
        <div className='flex flex-wrap justify-center'>
            {/* <Card heading={"Personalized Learing Path"} description={"Experience personalized learning at its fitness. Examly's adaptive algo creates a unique learning path tailored to your specific needs, healping you focus on what matters most."}></Card> */}
            <Card image={"./imgs/peq-1.avif"} total_count={3} heading={"Practice Exams and Quizzes"} description={"Practice makes perfect. Our practice exams and quizzes provides you with the tools you need to succeed on your exams."}></Card>
            <Card image={"./imgs/da-1.avif"} total_count={3} heading={"Detailed Performance Analysis"} description={"Gain valuable insights into your performance with our detailed analysis. Identify strengths, weaknesses, and areas for improvement to optimize your study strategies."}></Card>
            <Card image={"./imgs/pa-1.jpg"} total_count={3} heading={"Progress Tracking"} description={"Stay motivated and focused with our progress tracking feature. Set goals, track your progress, and celebrate your achivements."}></Card>
        </div>
    </>
  )
}
