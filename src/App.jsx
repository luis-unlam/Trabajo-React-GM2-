import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
// import CreatePage from './pages/CreatePage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editPage" element={<EditPage />} />
        <Route
          path="/createPage"
          element={<Navigate replace to="/editPage" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
