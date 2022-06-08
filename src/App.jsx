import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import CreatePage from './pages/CreatePage'
import NotFoundPage from './pages/NotFoundPage'
import TaskListPage from './pages/TaskList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/EditPage/:id" element={<EditPage />} />
        <Route path="/createPage" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/taskList" element={<TaskListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
