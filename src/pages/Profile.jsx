import React from "react";
import LeftColumn from '../components/LeftColumn.jsx';
import RightColumn from '../components/RightColumn.jsx';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Posts from "../components/Posts.jsx";



function Profile() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [editing, setEditing] = useState(false);
    const [userBio, setUserBio] = useState('');
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    const toggleEditing = () => {
        if(editing){
            saveBio();
        }
        setEditing(!editing);
    };

    const handleBioChange = (event) => {
        setUserBio(event.target.value);
    };

    const saveBio = async () => {
        const updatedBio = {bio: userBio};
        try{
            await axios.patch('/api/user/' + decodedToken.id, updatedBio);
            console.log("Bio updated!")
        }catch(error){
            console.log('Error updating bio: ' + error);
        }
    };

    useEffect(() => {
        const fetchUserAndPosts = async () => {
            if (!decodedToken || !decodedToken.id) {
                console.error('Invalid token or user ID not found');
                return;
            }

            try {
                const userResponse = await axios.get('/api/user/' + decodedToken.id);
                setUserBio(userResponse.data.bio || 'Write a funny bio!');

                const postsResponse = await axios.get('api/post/feed/' + decodedToken.id);
                setPosts(postsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchUserAndPosts();
    }, []);

    return (
        <div className="flex h-screen">
            <div className="h-screen w-1/4"> { /* left column */ }
                <LeftColumn />
            </div> { /* end of left column */ }
            <div className="h-screen w-1/2"> { /*middle column */ }
            <div className="h-1/3 w-full border-2"> { /* top half of middle column - profile specific stuff */ }
                    <div className="h-1/3 w-full flex items-end py-4 justify-between">
                        <span className="text-blue-500 underline font-bold px-10 text-3xl">
                            {decodedToken.username}
                        </span>
                        <button onClick={toggleEditing} className="mt-6 mb-6 mr-6 p-2 font-bold text-xl text-slate-800 w-1/6 rounded-full border-solid border-2 border-black hover:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-300 active:bg-slate-700">
                            {editing ? 'Save' : 'Edit Bio'}
                        </button>
                    </div>
                    <div className="h-1/3 w-full flex items-center px-10 text-slate-600 text-lg font-semibold">
                         {editing ? (
                             <input
                                type="text"
                                value={userBio}
                                onChange={handleBioChange}
                                className="w-full p-2 border border-slate-300 rounded"
                              />
                            ) : (
                                <span>{userBio}</span>
                            )}
                    </div>
                    
                    <div className="h-1/3 w-full flex justify-around">
                        <button onClick={() => {
                            navigate("/Followers");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            Followers
                        </button>
                        <button onClick={() => {
                            navigate("/Following");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            Following
                        </button>
                        <button onClick={() => {
                            navigate("/LOLs");
                        }}
                            className="mt-6 mb-6 font-bold text-xl text-slate-800 w-1/6 rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-600">
                            LOLs
                        </button>
                    </div>
                </div>
                <div className="h-2/3 w-full border-2 flex flex-col justify-center items-center overflow-y-scroll scrollbar-hide"> {/* posts section, bottom half of middle columh */ }
                        <Posts posts={posts}/>
                </div>
            </div>
            <div className="h-screen w-1/4"> { /* third column */ }
                <RightColumn />
            </div> 
        </div>

    )
  }
  
  export default Profile