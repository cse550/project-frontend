import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const [userAccount, setUserAccount] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = e => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user', userAccount);

            if (response.status === 201) {
                console.log('User created');
                navigate('/profile');
            } else {
                console.log("Error creating user");
            }
            localStorage.setItem('token', response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="bg-slate-800 shadow-xl shadow-slate-700 rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            name="username"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            name="email"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            name="password"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;