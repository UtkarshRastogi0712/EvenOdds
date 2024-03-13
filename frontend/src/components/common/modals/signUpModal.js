import React from "react";
import { RxCross2 } from "react-icons/rx";

const SignUpModal = ({ showModal2, setShowModal2 }) => {
  return (
    <>
      {showModal2 ? (
        <form class=" fixed inset-0 z-50  bg-opacity-30 backdrop-blur-sm m-auto items-center justify-center ">
          <div className="h-max inset-0 w-80 px-4 py-6 fixed m-auto mt-60 rounded-lg bg-slate-200 ">
            <div class="flex justify-between items-center">
              <h1 className="text-2xl">Sign up</h1>

              <RxCross2
                className="w-4 h-4"
                onClick={() => {
                  setShowModal2(!showModal2);
                }}
              />
            </div>

            <div className="mt-6">
              <div className="flex flex-col gap-y-1">
               
                  <label class="w-0 text-lg" for="username">
                    Username
                  </label>
               
             
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                
              </div>

              
              <div className="flex flex-col">
              <button className="mt-4 bg-slate-400 w-full py-2 rounded-lg">Connect Wallet</button>
              <button className="mt-4 bg-slate-400 w-full py-2 rounded-lg">Submit</button>

              </div>

              
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
};
export default SignUpModal;
