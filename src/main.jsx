import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Projects from './routes/Projects.jsx'
import Curriculum from './routes/Curriculum.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/cv',
    element: <Curriculum />
  },
  {
    path: '/contact',
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
