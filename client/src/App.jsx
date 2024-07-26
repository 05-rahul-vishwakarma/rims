import HomePage from "./pages/root/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "./pages/root/MainLayout"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
