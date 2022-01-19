import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Tutoring from './components/tutoring/Tutoring'
import Blog from './components/blog/Blog'
import Write from './components/write/Write'
import WallOfFame from './components/wallOfFame/WallOfFame'


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Tutoring/>
      <Blog/>
      <Write/>
      <WallOfFame/>
    </div>
  )
}

export default App

