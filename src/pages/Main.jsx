import React, {useEffect, useState} from "react";
import LeftColumn from '../components/LeftColumn.jsx';
import RightColumn from '../components/RightColumn.jsx';
import GlobalPosts from "../components/GlobalPosts.jsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Main() {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);

  useEffect(() => {
    const fetchPosts = async () => {
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
    <div className="flex h-screen">
      <div className="h-screen w-1/4"> { /* left column */ }
        <LeftColumn />
      </div>
      <div className="h-screen w-1/2 border-2"> { /* middle column */ }
        <div className="w-full py-4 border-b-2 text-4xl text-center font-semibold">
          <h1 className="text-slate-700">Main</h1>
        </div>
        <div className="h-full w-full border-2 flex flex-col justify-center items-center no-scrollbar overflow-y-scroll">
          <GlobalPosts posts={posts}/>
        </div>
      </div> { /* end of middle column */ }
      <div className="h-screen w-1/4"> { /* third column */ }
        <RightColumn />
      </div>
    </div>
  );
}

export default Main;