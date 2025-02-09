import React from 'react'
import background from "../../assets/loading-back.jpg"
import './Loading.css'

const Loading = () => {
  return (
    <div className='flex-auto items-center justify-around bg-black'>
    <div style={{  backgroundImage: `url(${background})` }} className='opening bg-no-repeat bg-center flex items-center justify-center h-screen '>
    <div>
    <p className="flex-auto items-center justify-center text-center text-[10em] text-slate-300">
     Y.A.R.N.
    </p>
    <br></br>
      <p className="flex-auto items-center justify-center text-center text-[2em] text-white">
      Yet Another Resourseful Nerd
      </p>

    </div>
    
    </div>
    
    </div>
    
  )
}

export default Loading
