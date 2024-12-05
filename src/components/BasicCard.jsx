import React from 'react'

export default function BasicCard({src}) {
  return (
    <>
        <img className='w-full h-auto max-h-[200px] object-cover' src={src} alt='img' />
    </>
  )
}
