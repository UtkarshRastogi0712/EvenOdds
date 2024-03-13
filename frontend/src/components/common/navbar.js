import React from 'react'
import { useState } from 'react'

import SignUpModal from './modals/signUpModal'


const Navbar = () => {

  const[showModal2, setShowModal2] = useState(false)
  return (
    <div>
      <div className='flex justify-between p-6 bg-slate-200'>
      <div>Logo</div>
      <div className='flex gap-x-4'>
      
      <button
          onClick={() => setShowModal2(!showModal2)}
          className=" "
        >
         Sign Up
        </button>
      </div>
      <div className="absolute">
        <SignUpModal showModal2={showModal2} setShowModal2={setShowModal2}/>
      </div>
    </div>
     
    

     </div>
  
  )
}

export default Navbar