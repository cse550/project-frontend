import React from "react";
import { useNavigate } from "react-router-dom";

function RightColumn() {

    const navigate = useNavigate(); // used to navigate between pages

    return (

    <div className="w-full h-full flex flex-col justify-between">
        <div className="py-6 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-4">
                        <div className="relative">
                            <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                            <input type="text" className="bg-slate-200 h-14 w-full px-10 rounded-full focus:outline-none hover:cursor-pointer" name="" placeholder="Search.."></input>
                            <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div className="w-full px-6 py-8 flex items-center">
            <div className="w-full">
                { /* show more button; when clicked, takes you to page with other users (random generation?) */ }
                <button onClick={() => {
                    navigate("/FindCreators");
                 }}
                    className="h-full p-4 rounded-xl w-full text-2xl bg-gray-50 text-blue-400 hover:bg-slate-200 text-left px-6">
                    Creators you might like...
                </button>
            </div>
        </div>
    </div>
    )
}

export default RightColumn;