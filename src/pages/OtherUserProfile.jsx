import React from "react";
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function OtherUserProfile() {

    const navigate = useNavigate(); // used to navigate between pages

    return (
        <div className="flex h-screen">
            <div className="h-screen w-1/4"> { /* left column */ }
                <LeftColumn />
            </div> { /* end of left column */ }
            <div className="h-screen w-1/2"> { /*middle column */ }
            <div className="h-1/3 w-full border-2"> { /* top half of middle column - profile specific stuff */ }
                    <div className="h-1/3 w-full flex items-end py-4 justify-between">
                        <span className="text-slate-800 font-bold px-10 text-2xl">
                            Other username here
                        </span>
                        <button className="mt-6 mb-6 mr-6 p-2 font-bold text-xl text-slate-800 w-1/6 rounded-full border-solid border-2 border-black hover:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700">
                            Follow
                        </button>
                    </div>
                    <div className="h-1/3 w-full flex items-center px-10 text-slate-600 font-semibold">
                        <span>
                            Your bio goes here. Do us a favor? Come up with something funny
                        </span>
                    </div>
                    <div className="h-1/3 w-full flex justify-around">
                        <button onClick={() => {
                            navigate("/Followers");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            Followers
                        </button>
                        <button onClick={() => {
                            navigate("/Following");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            Following
                        </button>
                        <button onClick={() => {
                            navigate("/LOLs");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            LOLs
                        </button>
                    </div>
                </div>
                <div className="h-2/3 w-full border-2 flex flex-col justify-center items-center"> { /* bottom half of middle column - POST stuff */ }
                    <h1 className="text-slate-700 text-6xl font-bold">
                        :(
                    </h1>
                    <h1 className="mt-12 text-slate-600 text-2xl font-bold">
                        You don't have any posts.
                    </h1> 
                    <h1 className="mt-12 text-slate-400 text-2xl">
                        Change that now?
                    </h1>               
                </div>
            </div>
            <div className="h-screen w-1/4"> { /* third column */ }
                <RightColumn />
            </div> 
        </div>

    )
  }
  
  export default OtherUserProfile