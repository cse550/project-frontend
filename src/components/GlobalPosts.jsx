import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import GlobalPost from "./GlobalPost";

function GlobalPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        if (!decodedToken || !decodedToken.id) {
            console.error('Invalid token or user ID not found');
            return;
        }

        try {
            const response = await axios('api/post/feed/' + decodedToken.id);
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    fetchPosts();
}, []);

  return (
    <div className="flex flex-col h-full w-full"> {/* Ensure the parent container fills available space */}
    {posts.length > 0 ? (
      posts.map((post, index) => (
        <GlobalPost key={post.id} post={post} />
      ))
    ) : (
      <>
        <h1 className="text-slate-700 text-6xl font-bold">:(</h1>
        <h1 className="mt-12 text-slate-600 text-2xl font-bold">
          You don't have any posts.
        </h1>
        <h1 className="mt-12 text-slate-400 text-2xl">
          Change that now?
        </h1>
      </>
    )}
  </div>
);
}

export default GlobalPosts;