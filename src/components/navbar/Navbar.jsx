import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
    const [isMobile,setMobile]= useState(false)
  return (
    <nav className='navbar'>
        <div className='logo'><h3>Logo</h3></div>

        <div>
        <ul className={isMobile ? 'button-mob' : 'button'} onClick={() => setIsMobile}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Products'>Products</Link></li>
            <li><Link to='/SignUp'>SignUp</Link></li>
        </ul>
        <button className='mob-menu-icon' onClick={()=> setMobile(!isMobile)}>
            {isMobile ? <h1>X</h1> : <h1>=</h1>}
        </button>
        </div>
    </nav>
  )
}

export default Navbar