import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,  RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Home, About, Contact, Store} from './pages'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
