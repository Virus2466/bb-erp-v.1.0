import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { GiHamburgerMenu } from "react-icons/gi"
import Dashboard from './pages/Dasboard'
import Employee from './pages/Employee';
import Sales from './pages/Sales';
import Properties from './pages/Properties';
import B2B from './pages/B2B';
import Analytics from './pages/Analytics'
import Settings from './pages/Settings';


function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <Router>
          <header>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          </header>

          <Navbar show={showNav} />
            <div className='main'>
              <Routes>
                <Route path='/' exact={true} Component={Dashboard}/>
                <Route path='/Employee' exact={true} Component={Employee}/>
                <Route path='/Sales' exact={true} Component={Sales}/>
                <Route path='/Properties' exact={true} Component={Properties}/>
                <Route path='/B2B' exact={true} Component={B2B}/>
                <Route path='/Analytics' exact={true} Component={Analytics}/>
                <Route path='/Settings' exact={true} Component={Settings}/>
              </Routes>
            </div>
      </Router>
    </>
  );
}

export default App;
