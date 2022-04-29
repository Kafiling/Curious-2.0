import { useState } from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

//import src
import './App.css'
//import custom hooks or context provider

//import components
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes >
          <Route path='/' />
      </Routes>
    </Router>
        
      
    </div>
  )
}

export default App
