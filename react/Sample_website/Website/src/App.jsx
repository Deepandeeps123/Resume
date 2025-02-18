// import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contat from './Components/Contat'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />

        <Routes>
            <Route path='./Components/Home.jsx' element={<Home />}/>
            <Route path='./Components/About.jsx' element={<About />}/>
            <Route path='./Components/Contat.jsx' element={<Contat />}/>
        </Routes>
    
    </BrowserRouter>




     
    </>
    
  )
}

export default App
