import React from "react";
import { useNavigate } from "react-router-dom";

function LeftColumn() {

    const navigate = useNavigate(); // used to navigate between pages

  return (
    <div className="flex flex-col items-center mt-72">
        <button onClick={() => {
            navigate("/Main");
        }}
            className="bg-blue-400 px-8 py-4 mb-6 text-white w-3/5 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Main
        </button>
        <button onClick={() => {
            navigate("/TopCreators");
        }}
            className="bg-blue-400 px-8 py-4 mb-6 text-white w-3/5 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Top Creators
        </button>
        <button onClick={() => {
            navigate("/Profile");
        }}
            className="bg-blue-400 px-8 py-4 mb-6 text-white w-3/5 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Profile
        </button>
        <button onClick={() => {
            navigate("/PostWindow");
        }}
            className="border-solid border-2 border-blue-600 px-8 py-4 mb-6 text-blue-600 w-3/5 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Post
        </button>
    </div>

  );
}

export default LeftColumn;