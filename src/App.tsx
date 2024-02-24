import React, { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'
import { alert } from './services/auth/alertService'
import Toaster from './components/ToasterContainer'

function App() {
 //  useEffect(() => {
 //   return () => {
 //    alert('Login successfully', 'success')
 //   }
 //  }, [])
 return (
  <div>
   <RouterProvider router={router} />
   <Toaster />
  </div>
 )
}

export default App
