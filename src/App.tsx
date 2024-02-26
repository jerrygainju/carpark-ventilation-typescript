import './App.css'
import Car from './page/Car'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Duct from './page/duct-sizer/duct'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Car/>} />
        <Route path ="duct-size" element={<Duct />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
