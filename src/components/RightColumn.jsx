import React from "react";
import { useNavigate } from "react-router-dom";

function RightColumn() {

    const navigate = useNavigate(); // used to navigate between pages

    return (

    <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full px-6 py-8">
            <div className="w-full">
                { /* show more button; when clicked, takes you to page with other users (random generation?) */ }
                <button onClick={() => {
                    navigate("/Welcome");
                 }}
                    className="h-full p-4 rounded-xl w-full text-2xl bg-gray-50 text-blue-400 hover:bg-slate-200 text-left px-6">
                    Sign Out...
                </button>
            </div>
        </div>
        <div> {/* LOL image */}
            <img
                    src="../src/assets/Logo.png"
                    alt="LOL logo"
                    className="h-60 w-66 mx-8"
            />
        </div>        
        <div className="w-full px-6 py-8 flex">
            <div className="w-full py-4">
                { /* show more button; when clicked, takes you to page with other users (random generation?) */ }
                
            </div>
        </div>
    </div>
    )
}

export default RightColumn;