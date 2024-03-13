import React from 'react'
import { useState } from 'react'
import LoginModal from './modals/loginModal'
import SignUpModal from './modals/signUpModal'


const Navbar = () => {
  const[showModal, setShowModal] = useState(false)
  const[showModal2, setShowModal2] = useState(false)
  return (
    <div>
      <div className='flex justify-between p-6 bg-slate-200'>
      <div>Logo</div>
      <div className='flex gap-x-4'>
      <button
        onClick={() => setShowModal(!showModal)}
        className=""
      >
        Log in
      </button>
      <LoginModal showModal={showModal}  />
      <button
          onClick={() => setShowModal2(!showModal2)}
          className=" "
        >
          Join today
        </button>
      </div>
      <div className="absolute">
        <SignUpModal showModal2={showModal2}/>
      </div>
    </div>
     
    

     </div>
  
  )
}

export default Navbar