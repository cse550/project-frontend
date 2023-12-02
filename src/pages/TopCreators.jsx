import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftColumn from '../components/LeftColumn.jsx';
import RightColumn from '../components/RightColumn.jsx';
import {jwtDecode} from "jwt-decode";

function UserCard({ user, onFollow }) {
    return (
        <div className="card bg-white p-4 m-2 shadow-lg">
            <p>{user.username}</p>
            <button
                onClick={() => onFollow(user)}
                className="bg-blue-500 text-white p-2 rounded mt-2"
            >
                Follow
            </button>
        </div>
    );
}

function TopCreators() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const response = await axios.get(`/api/user/username/${decodedToken.username}`);
                setCurrentUser(response.data);
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        getCurrentUser();
    }, [decodedToken.username]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            if (!currentUser) {
                return;
            }

            try {
                const response = await axios.get('/api/user');
                const allUsers = response.data;
                const filteredUsers = allUsers.filter(user => !currentUser.following.includes(user.id));
                setUsers(filteredUsers);
            } catch (error) {
                console.error('Error fetching random users:', error);
            }
        };

        if (currentUser) {
            fetchRandomUsers();
        }
    }, [currentUser]);



    return (
        <div className="flex h-screen">
            <div className="h-screen w-1/4">
                <LeftColumn />
            </div>
            <div className="h-screen w-1/2 border-2">
                <div className="w-full py-4 border-b-2 text-4xl text-center font-semibold">
                    <h1 className="text-slate-700">Top Creators</h1>
                </div>
                <div>
                    {users.map(user => (
                        <UserCard key={user.id} user={user} onFollow={followUser} />
                    ))}
                </div>
            </div>
            <div className="h-screen w-1/4">
                <RightColumn />
            </div>
        </div>
    );
}

export default TopCreators;
