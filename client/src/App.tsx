import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Create from './components/Create'
import Details from './components/Details'
import Button from './styledComponents/Button'
import StyledLink from './styledComponents/StyledLink'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/create' element={<Create/>} />
        <Route path='/home/:id/:from' element={<Details/>} />
        <Route path='*' element={<Home/>} />
    </Routes>
  )
}

export default App;