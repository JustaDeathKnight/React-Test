import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <nav className='cyan darken-4'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left ">Requiem</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><button className='btn deep-orange accent-4 waves-effect waves-light' onClick={handleLogout}>logout</button></li>
        
      </ul>
    </div>
  </nav>
  )
}

export default Navbar