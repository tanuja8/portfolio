import React from 'react'

export default function About() {
  return (
    <div>
      <h3 className='text-center'>About Me</h3>
      <span className='text-success'>Introduction</span>
      <div className='row m-3'>
        <div className='col-lg-4 m-5'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXinVVym0muO6dd2hX0Usopqxvf508zud7JL7tc_1S2r9pYp_1vGtRft7woQPtrldt7Lg&usqp=CAU"
            alt="" srcset="" />
        </div>
        <div className='col-lg-8'>
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
