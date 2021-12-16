import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<p>Login Page</p>} />
      <Route path="/" element={<p>Home Page</p>} />
    </Routes>
  )
}
