
import './App.css'
import { LandingPage } from './Components/LandingPage'
import { NavBar } from './Components/NavBar'
import { Routes , Route } from 'react-router-dom'
import { Projects } from './Components/Projects'
import { CodingProfiles } from './Components/CodingProfiles'
import { Experience } from './Components/Experience'
import { Skills } from './Components/Skills'
import { Socials } from './Components/Socials'

function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/profiles' element={<CodingProfiles />} />
      <Route path='/socials' element={<Socials />} />
      <Route path='/experience' element={<Experience />} />
      <Route path='/skills' element={<Skills />} />

    </Routes>
      
    </>
  )
}

export default App
