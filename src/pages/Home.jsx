import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import ContactUs from '../components/ContactUs'
import Counter from '../components/Counter'
import NavBar from '../components/NavBar'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <NavBar></NavBar>
        <Container>
          <Counter></Counter>
          <Hero></Hero>
          <Features></Features>
          <About></About>
          <Testimonial></Testimonial>
          <ContactUs></ContactUs>
        </Container>
        <Footer></Footer>
    </>
  )
}
