import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {

    const navigate = useNavigate();

    return (
      <div className="h-screen flex">
            <div className="relative h-screen w-1/2 bg-blue-400 text-center">
              <div className="h-screen flex flex-col justify-center">
                <h1 className="text-6xl text-white font-sans">Welcome to LOL!</h1>
                <p className="text-xl text-white font-sans py-4">Sit back, relax, and enjoy some LOLs.</p>
              </div>
            </div>
              <div className="h-screen w-1/2">
                  <div className="h-screen flex flex-col justify-center items-center space-y-4">
                      <p className="text-xl text-blue-400 font-sans">Laugh today.</p>
                      <button onClick={() => {
                        navigate("/CreateAccount");
                    }}
                          className="bg-blue-400 px-8 py-2 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
                          Sign Up
                      </button>
                      <button onClick={() => {
                        navigate("/UserLogin");
                    }}
                        className="bg-blue-400 px-8 py-2 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
                        Log In
                      </button>
                  </div>
              </div>
          </div>
    )
  }
  
  export default Welcome