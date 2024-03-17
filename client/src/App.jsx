import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Projects from './pages/Projects'
import Header from './components/header'

const App = () => {
  return (
    <>
      <Header/>
   
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}> </Route>
      <Route path='/signin' element={<Signin></Signin>}></Route>
      <Route path='/signout' element={<Signout></Signout>}></Route>
      <Route path='/projects' element={<Projects></Projects>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App