import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Register from '../pages/user/Register'
import Login from '../pages/user/Login'
import Home from '../pages/Home/Home'
import { JSX } from 'react/jsx-runtime'
export const ProtectedRoute: React.FC<{
 element: JSX.Element
 path: string
}> = ({ element, path }) => {
 const token = localStorage.getItem('token')
 const isAuthenticated = token ? true : false
 if (!isAuthenticated) {
  if (path !== '/login' && path !== '/register') {
   return <Navigate to="/login" />
  }
 } else {
  if (path === '/login' || path === '/register') {
   return <Navigate to="/" />
  }
 }

 return element
}
export const router = createBrowserRouter([
 {
  path: '/',
  element: <ProtectedRoute element={<Home />} path="/" />,
 },
 {
  path: '/login',
  element: <ProtectedRoute element={<Login />} path="/login" />,
 },
 {
  path: '/register',
  element: <ProtectedRoute element={<Register />} path="/register" />,
 },
])
