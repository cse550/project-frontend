import React from "react";
import { useState } from 'react';

function CreateAccount() {
    const [userAcount, setUserAcount] = useState({
        userName: "",
        passWord: "",
        handle: "",
        bio: "",
        webSite: "",
        profilePic: "",
    })

    const handleChange = e => {
        setUserAcount({
            ...userAcount,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = e => {
        e.preventDefault();

        console.log(userAcount);
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="bg-slate-800 shadow-xl shadow-slate-700 rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <h1 className="text-white text-xl font-bold pb-4">Create Your Account</h1>
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input name="userName" onChange={handleChange} className="shadow appearance-none border rounded border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input name="passWord" onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="handle">
                            Handle (name for profile page)
                        </label>
                        <input name="handle" onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Parzival"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="bio">
                            Bio (100 characters or less)
                        </label>
                        <input name="bio" onChange={handleChange} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Here for the McRibs"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="website">
                            Website
                        </label>
                        <input name="webSite" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="justforgiggles.com"></input>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2" htmlFor="website">
                            Photo
                        </label>
                        <input name="profilePic" onChange={handleChange} className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white mb-4 file:border-1 file:border-blue-800 file:rounded file:text-white file:py-2 file:px-3 file:bg-blue-500 hover:file:bg-blue-700" id="photo" type="file"></input>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;