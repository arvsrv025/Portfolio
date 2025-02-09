import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Introduction from './Introduction/Introduction.jsx'

const Landing = () => {
  const landing={
    backgroundColor: 'black',
    height: '100vh',
    color: '#39ff14',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <>
    <div style={landing}>
    <Navbar />
    <Introduction style={{height:'25%'}}/>
    
    </div>

    </>
    
   
  )
}

export default Landing
