import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Monthly from './pages/Monthly'
import Daily from './pages/Daily'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monthly />} />
        <Route path="/daily" element={<Daily />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
