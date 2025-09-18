import React from 'react'
import Arrayofobj from './Arrayofobj'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Navbar/>}/>
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>}/>

        </Routes>

      </BrowserRouter>



      {/* <Arrayofobj/> */}
    </div>
  )
}

export default App