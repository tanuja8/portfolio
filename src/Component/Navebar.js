import React from 'react'

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
            <a className="nav-link text-white " href="#">HOME<span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="">SKILLS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="ebook.html">SERVICES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " href="ebook.html">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
