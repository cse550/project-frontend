import React from "react";
import { useNavigate } from "react-router-dom";

function RightColumn() {

    const navigate = useNavigate(); // used to navigate between pages

    return (

    <div className="w-full h-full">
        <div className="py-6 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-4">
                        <div classNameName="relative">
                            <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                            <input type="text" class="bg-slate-200 h-14 w-full px-10 rounded-full focus:outline-none hover:cursor-pointer" name="" placeholder="Search.."></input>
                            <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div className="w-full h-1/2 py-4 px-8">
            <div className="h-1/6 border border-solid bg-gray-50 flex items-center">
                <h1 className="px-6 text-xl font-bold text-slate-800">
                    Creators you might like
                </h1>
            </div>
            <div className="h-2/3 border border-solid bg-gray-50">
                { /* Randomly populate with other users/top creators - show username and have a follow button?*/ }
            </div>
            <div className="h-1/6 border border-solid bg-gray-50">
                { /* show more button; when clicked, takes you to page with other users (random generation?) */ }
                <button onClick={() => {
                    navigate("/FindCreators");
                 }}
                    className="h-full w-full text-lg bg-gray-50 text-blue-400 hover:bg-slate-200 text-left px-6">
                    Show more
                </button>
            </div>
        </div>
    </div>
    )
}

export default RightColumn;