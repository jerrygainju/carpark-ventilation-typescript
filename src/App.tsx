import './App.css'
import Car from './page/Car'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Car/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
