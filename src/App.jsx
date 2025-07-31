import { useState } from 'react'


import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './Comp/Home'

import { Route } from 'react-router-dom'
import Contact from './Comp/Home/Contact'
import About from './Comp/Home/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>


 <Route path='/' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />







     </Routes>
     
     
     
     
     
     </BrowserRouter>
    </>
  )
}

export default App
