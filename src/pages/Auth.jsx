import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Container from '../components/Container'

export default function Auth({type}) {
  return (
    <>
        <NavBar></NavBar>
        <Container>
          <div className='flex bg-[#dcecfc] border-[1px] h-[68vh]'>
              <div className='hidden sm:block sm:w-1/2 h-full'>
                  <img src="./imgs/auth-1.avif" className='h-full object-cover' alt="" />
              </div>
              <div className='flex flex-col items-center justify-center w-full sm:w-1/2'>
                  {type==='login'?<Login></Login>:<SignUp></SignUp>}
              </div>
          </div>
        </Container>
        <Footer></Footer>
    </>
  )
}
