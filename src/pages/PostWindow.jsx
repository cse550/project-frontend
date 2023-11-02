import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function PostWindow() {

  const navigate = useNavigate(); // to navigate between pages

  return (
    <div className="h-screen flex flex-col items-center justify-center">
        <form
            className="bg-white w-1/4 shadow-lg shadow-slate-400 border-2 border-blue-600 rounded px-1 py-1 pb-2">
            <textarea
                placeholder="Something funny on your mind?"
                className="w-full h-36 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={() => {
                    navigate("/Profile");
                }}
                className="bg-blue-400 px-6 py-1 mb-1 text-white w-1/10 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800" type="submit">
                Post
            </button>
        </form>
    </div>
  );
}

export default PostWindow;