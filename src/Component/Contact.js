import React from 'react'
export default function Contact() {
  return (
    <div>
        <div className='container'>
      <h3 className='text-center  mt-5'>Contact</h3>
      <span className='text-success'>Contact With Me</span>
      <div className='row m-5'>
        <div className='col-lg-4 text-left'>
<h3 className=''>Contact</h3>
    <span>tanujakhatun292@gmail.com</span><br/>
    <span>8927933406</span>
<div className='row'>
</div>
        </div>
        <div className='col-lg-8 contactform'>
        <form className='text-center'>
        <input type="text" placeholder='Enter Your Name' className='w-50 p-2' /> <br></br>
        <input type="email" placeholder='Enter your email' className='my-3 w-50 p-2' /> <br></br>
        <input type="text" placeholder='Enter your Phone Number' className='mb-3 w-50 p-2' /> <br></br>
        <textarea id="freeform" name="freeform" rows="4" cols="50" >
          Type your Message...
        </textarea><br/>  
        <button type="button" className="btn btn-danger px-5 mt-3">SUBMIT</button>
      </form>
        </div>
      </div>
      </div>
     </div>
  )
}
