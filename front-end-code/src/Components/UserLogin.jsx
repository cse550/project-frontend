import React from "react";

function UserLogin() {
    return (
        <div class="min-h-screen flex items-center justify-center">
            <form>
                <label class="block">
                    <span class="block text-sm font-medium">Username</span>
                    <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border-slate-300 rounded-md shadow-sm" />
                    <span class="block text-sm font-medium">Password</span>
                    <input type="password" class="mt-1 block w-full px-3 py-2 bg-white border-slate-300 rounded-md shadow-sm" />
                </label>
            </form>
        </div>
    )
}

export default UserLogin;