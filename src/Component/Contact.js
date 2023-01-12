import React from 'react'
import './Style.css'
export default function Contact() {
  return (
    <div>
      <div className=' contactimg m-3 '>
        <h3 className='text-center  mt-5'>Contact</h3>
        <span className=' text-white'>Contact With Me</span>
        <div className='row m-5'>
          <div className='col-lg-3 text-left'>
            <h3 >Let's chat<br />
              Tell me about your Project
            </h3>
            <span>8927933406</span><br />
            <span>tanujakhatun292@gmail.com</span>

            <div className='row'>
            </div>
          </div>
          <div className='col-lg-9 '>
            <form className='text-left'>
              <input type="text" placeholder='Enter Your Name' className='w-50 p-2' /> <br></br>
              <input type="email" placeholder='Enter your email' className='my-3 w-50 p-2' /> <br></br>
              <input type="text" placeholder='Enter your Phone Number' className='mb-3 w-50 p-2' /> <br></br>
              <textarea id="freeform" name="freeform" rows="4" cols="50" placeholder=' Type your Message...'>
              </textarea><br />
              <button type="button" className="btn btn-danger  mt-3 ">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
