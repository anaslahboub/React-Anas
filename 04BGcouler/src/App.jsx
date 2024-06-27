import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200  ' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2 bg-neutral-600'>
        <div className='flex flex-wrap justify-center w-full max-w-2xl bg-white rounded-full' >
          <button onClick={() => setColor('red')} className='text-black outline-none px-4 py-1 rounded-full shadow-lg bg-red-200'>red</button>
          <button onClick={() => setColor('green')} className='text-black outline-none px-4 py-1 rounded-full shadow-lg bg-red-200'>green</button>
          <button onClick={() => setColor('yellow')} className='text-black outline-none px-4 py-1 rounded-full shadow-lg bg-red-200'>yellow</button>
        </div>
      </div>

    </div>
  )
}

export default App
