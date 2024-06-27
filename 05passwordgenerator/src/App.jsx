import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const gnPassword = useCallback(() => {
    let pas = ""
    let str = "AZERTYUIOPMLKJHGFDSQWXCVBNazertyuiopmlkjhgfdsqwxcvbn"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += " :!ù$=àç_è-"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pas += str.charAt(char)
    }
    setPassword(pas)
  }, [length, charAllowed, numberAllowed])

  useEffect(() => {
    gnPassword()
  }, [length, charAllowed, numberAllowed, gnPassword])

  const passgn = () => {
    passwordref.current.select()
    document.execCommand('copy')
    alert('Password copied to clipboard')
  }

  const passwordref = useRef()

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold mb-4'>Password Generator</h1>
      <div className='w-full max-w-md bg-white p-4 rounded-lg shadow-md'>
        <div className='flex items-center mb-4'>
          <input
            type="text"
            placeholder='Generated password'
            readOnly
            className='flex-grow border border-gray-300 rounded-md p-2 mr-2 outline-none'
            value={password}
            ref={passwordref}
          />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={passgn}>Copy</button>
        </div>
        <div className='flex items-center gap-x-2 mb-4'>
          <input
            type="range"
            min={1}
            max={100}
            value={length}
            className='cursor-pointer w-full'
            onChange={(e) => setLength(Number(e.target.value))}
            id='length'
          />
          <label htmlFor="length" className='text-gray-700'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2 mb-4'>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            id='number'
            className='cursor-pointer'
          />
          <label htmlFor="number" className='text-gray-700'>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            id='character'
            className='cursor-pointer'
          />
          <label htmlFor="character" className='text-gray-700'>Include Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
