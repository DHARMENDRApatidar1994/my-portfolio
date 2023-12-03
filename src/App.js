import React from 'react'
import Portfolio from './components/Portfolio'
import { Route, Routes } from 'react-router-dom'
import Html from './components/Html'
import Java from './components/Java'
import Node from './components/Node'
import Reacted from './components/Reacted'


const App = () => {
  return (
    <div>


  

      <Routes>
      <Route path="/" element={<Portfolio />} />
        <Route path="/Html" element={<Html/>} />
        <Route path="/Java" element={<Java/>} />
        <Route path="/Node" element={<Node/>} />
        <Route path="/Reacted" element={<Reacted/>} />
      </Routes>

    </div>
  )
}

export default App