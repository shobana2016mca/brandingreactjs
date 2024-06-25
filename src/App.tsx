import { useState } from 'react'
import './App.css'
import Navbar from './Components/GlobalComponents/Navbar'
import HomePage from './Pages/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
       
    </>
  )
}

export default App
