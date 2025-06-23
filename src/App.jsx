import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Units from './Pages/units'
import Fade from './Pages/fade'
import Roki from './Pages/roki'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/fade" element={<Fade/>}/>
        <Route path="/roki" element={<Roki/>}/>
      </Routes>
    </Router>
  )
}

export default App