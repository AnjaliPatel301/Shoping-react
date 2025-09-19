import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import Card from './components/Cart'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<Card/>}/>
    <Route path='/Product' element={<Products/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
