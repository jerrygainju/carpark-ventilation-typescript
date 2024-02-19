import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './page/Car'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Car/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
