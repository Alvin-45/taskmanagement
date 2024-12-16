import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Update from './Pages/Update'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </>
  )
}

export default App
