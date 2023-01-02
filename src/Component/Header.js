import React from 'react'
import img2 from "../Component/img/tanu.jpg"
import './Style.css'

export default function Signup() {
    return (
        <div>
            <div className=" background_img">
                    <div className='row'>
                    <div className="container text-left m-5">
                    <div className='col-lg-7'>
                    <h1 className="text-white  ">Hello, I'am<br /> TANUJA KHATUN </h1>
                    <h3 className='text-warning'>Frontend Developer</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa asperiores quas, inventore molestiae at iste, corporis sequi omnis consequuntur vero veritatis laboriosam soluta molestias ipsum delectus rerum tenetur perspiciatis!</p>
                    <button type="button" class="btn btn-danger px-4">Contact Me</button>
                    </div>
                </div> 
            </div>
            <div className='col-lg-5 text-right mr-4 '>
               <img src={img2} alt="" className='w-50 h-40 rounded selfimg ' srcset="" />
        </div>
        </div>
        </div>
    )
}
