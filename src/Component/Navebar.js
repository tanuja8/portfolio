import React from 'react'
import { Link } from 'react-router-dom'

export default function Navebar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top ">
      <a className="navbar-brand" href="#">
        <h3>Port<span class="text-danger">folio</span></h3>
      </a>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
          <Link to='/'>
            Home
            </Link> 
                      </li>
          <li className="nav-item">
            <Link to='/about'>
            About
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/skills'>
            Skill
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/project'>
            Project
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/contact'>
            Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
