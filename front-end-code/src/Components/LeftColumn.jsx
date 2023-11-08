import React from "react";
import { useNavigate } from "react-router-dom";

function LeftColumn() {

    const navigate = useNavigate(); // used to navigate between pages

  return (
    <div className="flex flex-col mt-48 items-center">
        <button onClick={() => {
            navigate("/Main");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Main
        </button>
        <button onClick={() => {
            navigate("/Notifications");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Notifications
        </button>
        <button onClick={() => {
            navigate("/TopAllTime");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Top All Time
        </button>
        <button onClick={() => {
            navigate("/TopToday");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Top Today
        </button>
        <button onClick={() => {
            navigate("/TopCreators");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Top Creators
        </button>
        <button onClick={() => {
            navigate("/Profile");
        }}
            className="bg-blue-400 px-8 py-3 mb-6 text-white w-1/2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Profile
        </button>
        <button onClick={() => {
            navigate("/PostWindow");
        }}
            className="border-solid border-2 border-blue-600 px-8 py-3 mb-6 text-blue-600 w-1/2 rounded-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
            Post
        </button>
    </div>

  );
}

export default LeftColumn;