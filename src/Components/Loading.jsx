import React from 'react'
import background from "../assets/background.png"

const Loading = () => {
  return (
    <div className='flex-auto items-center justify-around  bg-black'>
    <div style={{ backgroundImage: `url(${background})` }} className='loading bg-no-repeat bg-center flex items-center justify-center h-screen'>
    <p className='flex-auto items-center justify-center text-center text-white text-[10em]'>WELCOME</p>
    </div>
    
    </div>
    
  )
}

export default Loading
