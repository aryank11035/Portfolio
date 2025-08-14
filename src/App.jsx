import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SectionHero from './components/SectionHero'
import IconFill from './components/animations/IconFill'
import SectionSkills from './components/SectionSkills'
function App() {

  return (
    <>
      <Header/>
      <SectionHero/>
      <SectionSkills/>
    </>
  )
}




export default App
