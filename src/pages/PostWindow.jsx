import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function PostWindow() {

  const navigate = useNavigate();

  const [postContent, setPostContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            if (!decodedToken || !decodedToken.id) {
                console.error('Invalid token or user ID not found');
                return;
            }

            const response = await axios.post('/api/post', {
                userId: decodedToken.id,
                content: postContent,
                likeCount: 0
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('Post created:', response.data);
            navigate('/Profile');

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
            <form
            onSubmit={handleSubmit}
            className="bg-white w-1/4 shadow-lg shadow-slate-400 border-2 border-blue-600 rounded px-1 py-1 pb-2">
            <textarea
            placeholder="Something funny on your mind?"
            className="w-full h-36 p-2 border border-gray-300 rounded"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
             />
            <button
                type="submit"
                className="bg-blue-400 px-6 py-1 mb-1 text-white w-1/10 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
                Post
            </button>
        </form>

    </div>
  );
}

export default PostWindow;