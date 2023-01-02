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
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam mollitia maxime id nobis
            recusandae corporis commodi sit quos reprehenderit debitis! Distinctio blanditiis assumenda
            cumque itaque temporibus sint eveniet ipsam illo soluta ea. Repudiandae dolorum a sint!
            Similique ab quidem odio error minima animi quo sapiente dolor.</p>
          <button type="button" className="btn btn-danger px-4">Get Resume</button>
        </div>
      </div>
    </div>
  )
}
