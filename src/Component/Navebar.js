import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'

export default function Navebar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top ">
      <a className="navbar-brand" href="#">
        <h3>Port<span class="text-danger">folio</span></h3>
      </a>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav m-auto  ">
          <li className="nav-item active">
        <Link to='/'> <h4 className='text-white'>Home</h4></Link>
            </li>
          <li className="nav-item">
            <Link to='/about'> <h4 className='text-white px-3'>About</h4></Link>
          </li>
          <li className="nav-item">
          <Link to='/skills'> <h4 className='text-white'>Skill</h4></Link>
          </li>
          <li className="nav-item">
          <Link to='/project'> <h4 className='text-white px-3'>Project</h4></Link>
          </li>
          <li className="nav-item">
         <Link to='/contact'><h4 className='text-white'>Contact</h4></Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
