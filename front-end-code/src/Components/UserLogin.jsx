import React from "react";

function UserLogin() {
    return (
        <div class="min-h-screen flex flex-col items-center justify-center">
            <h1 class="mt-1 block text-lg font-bold">Welcome to LOL</h1>
            <form>
                <label class="block">
                    <span class="block text-sm font-">Username</span>
                    <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border-slate-300 rounded-md shadow-sm" />
                    <span class="block text-sm font-medium">Password</span>
                    <input type="password" class="mt-1 block w-full px-3 py-2 bg-white border-slate-300 rounded-md shadow-sm" />
                </label>
            </form>
            <button class="mt-4 bg-amber-300 hover:bg-stone-300 text-slate-800 py-2 px-4 rounded" id="loginBtn">Login</button>
            <button class="mt-4 bg-amber-300 hover:bg-stone-300 text-slate-800 py-2 px-4 rounded" id="loginBtn">Register</button>
        </div>
    )
}

export default UserLogin;