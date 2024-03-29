import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, About, Projects, Contact } from './Pages'
import NavBar from './Components/NavBar'


function App() {

  return (
    <main className="bg-slate-300/20 h-FULL">
      <Router>
        <NavBar /> 
        <Routes>
          <Route exact path='/MyPortfolio' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>

    </main>
  )
}

export default App
