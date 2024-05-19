import { useState } from 'react'
import './App.css'
import Home from './stranice/home/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
