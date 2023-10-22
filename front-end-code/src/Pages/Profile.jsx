import React from "react";
import LeftColumn from '../Components/LeftColumn';
import RightColumn from '../Components/RightColumn';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Profile() {

    const navigate = useNavigate(); // used to navigate between pages

    return (
        <div className="flex h-screen">
            <div className="h-screen w-1/4"> { /* left column */ }
                <LeftColumn />
            </div> { /* end of left column */ }
            <div className="h-screen w-1/2"> { /*middle column */ }
                <div className="h-1/2 w-full border-2"> { /* top half of middle column - profile specific stuff */ }
                    <h1 className="text-center text-4xl text-blue-600 font-bold">
                        Profile Page
                    </h1>
                </div>
                <div className="h-1/2 w-full border-2"> { /* bottom half of middle column - POST stuff */ }

                </div>
            </div>
            <div className="h-screen w-1/4"> { /* third column */ }
                <RightColumn />
            </div> 
        </div>

    )
  }
  
  export default Profile