
import React from 'react'
import SpinNer from './components/Spinner'
export default function loading() {
  return (
    <div className='flex items-center  justify-center w-full h-screen'>
      <h2 className='text-4xl'>Loading...</h2>
      <SpinNer />
    </div>
  )
}
