
import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='row  text-left m-5'>
                <div className='col-lg-6'>
                    <h4>Hello, I'am</h4>
                    <h3>TANUJA KHATUN</h3>
                    <h4 className='text-danger'>Frontend Developer</h4>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam mollitia maxime id nobis
                        recusandae corporis commodi sit quos reprehenderit debitis! Distinctio blanditiis assumenda
                        cumque itaque temporibus sint eveniet ipsam illo soluta ea. Repudiandae dolorum a sint!
                        Similique ab quidem odio error minima animi quo sapiente dolor.</p>
                        <button type="button" className="btn btn-danger px-4">Contact Me</button>
                </div>
            <div className='col-lg-6'>
            <img src="https://i.ibb.co/9NLD4ys/tanu.jpg" className='w-75 h-75  '  style={{"border-radius":"50%"}}alt=""/>
            </div>
            </div>
        </div>
    )
}
