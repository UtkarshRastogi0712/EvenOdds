import React from 'react'

const LoginModal = ({ showModal, setShowModal }) => {
  return ( 
    <>
    {showModal?( <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="" for="username">
          Username
        </label>
        <input class="" id="username" type="text" placeholder="Username"/>
      </div>
      <div class="">
        <label class="" for="password">
          Password
        </label>
        <input class="" id="password" type="password" placeholder="******************"/>
        <p class="">Please choose a password.</p>
      </div>
      <div class="">
        <button class="" type="button">
          Sign In
        </button>
        <a class="" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    
  </div>):null}
  </>
  )
}

export default LoginModal