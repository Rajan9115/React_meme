import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomMeme from './components/RandomMeme'
import TagMeme from './components/TagMeme'


function App() {

  

  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
    
      <div
       className='  text-2xl font-bold text-center 
       py-2 bg-blue-400 w-11/12 mt-[40px] rounded-full uppercase'
       >
       Random Gifs 
       </div>
     
     <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
      <RandomMeme/>

      <TagMeme  />
     </div>
    </div>
  )
}

export default App
