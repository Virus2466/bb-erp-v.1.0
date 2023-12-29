import logo from './logo.png'
import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

const navbar = ({ show }) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
       <img src={logo} alt='logo' className='logo' />
        <ul>
            <li>
                <Link to='/' className='active'>Dashboard</Link>
                <Link to='/Sales'>Sales</Link>
                <Link to='/Analytics'>Analytics</Link>
                <Link to='/Employee'>Employee</Link>
                <Link to='/Properties'>Properties</Link>
                <Link to='/B2B'>B2B</Link>
                <Link to='/Settings'>Settings</Link>
            </li>
        </ul>
    </div>
  )
}

export default navbar