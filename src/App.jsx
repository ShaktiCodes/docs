import React from 'react'
import Background from "./components/Background";
import Foreground from './components/Fourground';

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'> 
    <Background />
    <Foreground/>
    
    
    </div>
  )
}

export default App