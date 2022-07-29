import { useState } from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

//import src
import './App.css'
//import custom hooks or context provider
  //Import Firebase SDK
  import { AuthProvider, auth } from './Firebase';
//import components
import Navbar from './components/pages/Navbar'

//import pages
import Home from './components/pages/HomePage/Home'
import Playground from './components/pages/Playground/Playground'
import Footer from './components/pages/Footer/Footer'
import AboutUs from './components/pages/AboutUs/AboutUs'
import Login from './components/pages/Login/Login'
import Help from './components/pages/Help/Help'
import Courses from './components/pages/Courses/Courses'
import Projectile from './Contents/Projectile/Page';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
    <AuthProvider>
    
    <Navbar/>
      <Routes >
          <Route path='/' element={<Home/>} exact></Route>
          <Route path='/playground' element={<Playground/>} exact></Route>
          <Route path='/aboutUs' element={<AboutUs/>} exact></Route>
          <Route path='/login' element={<Login/>} exact></Route>
          <Route path='/help' element={<Help/>} exact></Route>
          <Route path='/courses' element={<Courses/>} exact></Route>
          <Route path='/courses/projectile_1' element={<Projectile/>} exact></Route>
      </Routes>
      <Footer/>
    </AuthProvider>
    </Router>      
    
    </div>
  )
}

export default App
