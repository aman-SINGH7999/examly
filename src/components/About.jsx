import React from 'react'

export default function About() {
  return (
    <div className='bg-[#324D90] flex my-10'>
        <div className='sm:w-1/2 hidden sm:block'>
            <img className='object-cover h-full' src="./imgs/about.jpg" alt="About" />
        </div>
        <div className='w-full sm:w-1/2 py-20 px-10 sm:px-16 text-white text-justify'>
            <div className='text-lg font-semibold px-5 py-1'>About Us</div>
            <div>Examly is an innovative online learning platform that empowers students and instructors to excel in the digital age. We believe that everyone deserves access to quality education, regardless of their background or location. That's why we've created a platform that is accessible, affordable, and engaging.</div>
            <div>Our team is passionate about education and technology, and we're dedicated to providing our users with the best possible experience. We're constantly innovating and improving our platform to meet the needs of our growing community.</div>
            {/* <div>We're proud to have served thousands of students and instructors from all over the world. Our platform has been used to create and take millions of exams, and we're committed to providing our users with the best possible learning experience.</div>
            <div>We invite you to join our community and experience the power of Examly. With our platform, you can easily create and take exams, track your progress, and receive personalized feedback. Whether you're a student looking to improve your grades or an instructor looking to create engaging courses, Examly has everything you need to succeed.</div> */}
            <div className='font-semibold text-[#DCECFC] italic'>"We hope you'll join us on our journey to make education more accessible and effective for everyone."</div>
        </div>
    </div>
  )
}
