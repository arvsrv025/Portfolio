import { useEffect, useState } from 'react'

import './index.css'
import Loading from './Components/Loading'
import Landing from './Components/Landing'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=> setLoading(false),100000);

    return ()=> clearTimeout(timer);
  },[]);

  return (
    <div>
        {loading?(
          <Loading/>
        ):(
          <Landing/>
        )}
    </div>
  )
}

export default App
