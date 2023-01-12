import { FaFacebook } from 'react-icons/fa'
import { FaGooglePlus } from 'react-icons/fa'
import { GrGoogle } from 'react-icons/gr'
import { AiFillTwitterCircle } from 'react-icons/ai'
import {AiFillGooglePlusCircle} from 'react-icons/ai'
import {HiMail} from 'react-icons/hi'
import {AiFillLinkedin} from 'react-icons/ai'
import React from 'react'

export default function End() {
    return (
        <div>
            <div className='row bg-dark  p-4 m-3'>
                <div className='col-lg-2'>
                    <h3 className='text-white'>Port<span className="text-danger">folio</span></h3>
                </div>
                <div className='col-lg-4'>
                    <p className='display-6 text-white'>copyright@2022 || All right reserved by <span  
                     className='text- 
                     text-warning'>Tanuja</span></p>
                </div>
                <div className='col-lg-6'>
                <h1 className='text-white'><FaFacebook/> <AiFillTwitterCircle/> <AiFillGooglePlusCircle/> <HiMail/> <AiFillLinkedin/></h1>
                
                </div>
            </div>
        </div>
    )
}




// import React from 'react'

// export default function End() {
//   return (
//     <div className='py-4 bg-dark text-center my-3 text-white'>
//       <p className='display-6'>copyright@2022 || All right reserved by Tanuja</p>
//     </div>
//   )
// }
