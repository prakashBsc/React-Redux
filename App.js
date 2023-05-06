import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import Navbar from './Components/Navbar/Navbar'
import {GlobalProvider}  from "./Context/GlobalState"

const App = () => {
  return (
    <GlobalProvider>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/users' element={<Users />}/>
    <Route path='/contact' element={<Contact />}/>
  </Routes>
  </BrowserRouter>
  </GlobalProvider>
  );
};

export default App