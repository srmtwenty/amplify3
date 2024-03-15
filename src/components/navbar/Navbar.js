import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger1.svg'
import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        
        <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/works_anim" activeStyle>Works(Animation)</NavLink>
            </li>
            <li>
              <NavLink to="/works_code" activeStyle>Works(Coding)</NavLink>
            </li>
            <li>
              <NavLink to="/resume_code" activeStyle>Resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar