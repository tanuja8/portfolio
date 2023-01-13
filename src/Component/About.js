import React from 'react'
import img2 from "../Component/img/imgnew.jpg"
export default function About() {
  return (
    <div>
      <h3 className='text-center  mt-5'>About Me</h3>
      <span className='text-success'>Introduction</span>
      <div className='row m-5 '>
        <div className='col-lg-6 '>
          <img src={img2} alt="" className='w-75 ' srcset="" />
        </div>
        <div className='col-lg-6 text-left '>
          <p >Hi There, I'am Tanuja Khatun,I am from a small village call Native.I am currently living in Kolkata.I 
             have completed Diploma in CST from Nalhati Government Polytechnic.Now I am purshing B.Tech in CSE from 
             Aliah University. My Skill Set : HTML, CSS, Bootstrap, JavaScript,Reactjs. I am currently focusing on frontend development.</p>
          
          <button type="button" className="btn btn-danger px-4 mt-3">Get Resume</button>
        </div>
      </div>
    </div>
  )
}
