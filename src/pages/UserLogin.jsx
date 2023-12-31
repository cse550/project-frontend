import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



function UserLogin() {
    const [userCreds, setUserCreds] = useState({
        userName: "",
        password: "",
    })
    const navigate = useNavigate();

    const handleChange = e => {
        setUserCreds({
            ...userCreds,
            [e.target.name]: e.target.value,
        });
    }
    const [loginError, setLoginError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/user/login', {
                username: userCreds.userName,
                password: userCreds.password
            });
            localStorage.clear()
            localStorage.setItem('token', response.data.token);
            navigate('/Profile');
        } catch (error) {
            const errorMessage = error.response?.data?.body || 'Login failed';
            setLoginError(errorMessage);
        }
    };
    return (
        <section className="dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto xs:h-screen sm:h-screen md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xs:max-w-sm sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 xs:space-y-3 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Enter your username
                                </label>
                                <input type="text" name="userName" onChange={handleChange} id="text" className="bg-gray-50 border border-gray-300
                                text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500" placeholder="standard_username" required=""></input>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Enter your password
                                </label>
                                <input type="password" name="password" id="password" onChange={handleChange} className="bg-gray-50 border border-gray-300
                                text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block
                                w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500" placeholder="*********" required=""></input>
                            </div>
                            {loginError && <div className="text-red-500 text-sm mb-3">{loginError}</div>}
                            <button type="submit" className="w-full text-white bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserLogin;