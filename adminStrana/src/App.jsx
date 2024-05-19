import { useState } from 'react'
import './App.css'
import NewUser from './stranice/newUser/NewUser'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewUser/>
    </>
  )
}

export default App
