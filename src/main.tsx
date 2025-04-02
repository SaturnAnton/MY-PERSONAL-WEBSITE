import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import HomePage from './pages/home/HomePage.tsx'
import Aboutme from './pages/aboutme/Aboutme.tsx'
import Projects from './pages/projects/Projects.tsx'

createRoot(document.getElementById('root')!).render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
)
