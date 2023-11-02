

function UserProfile() {
    return (
        <section>
            <div className="flex h-screen flex-col">
                <div className="absolute flex flex-col shadow inset-y-0 w-32 h-screen bg-slate-600 ring-2 ring-slate-900/5">
                    <div className="flex h-screen justify-center items-center">
                        <ul>
                            <li className="text-white">PROFILE</li>
                            <li className="text-white">Friends</li>
                            <li className="text-white">PROFILE</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center bg-yellow-400 h-screen">
                    <img
                        //Pull users profile pic
                        className="w-24 h-24 rounded-full mb-4">
                    </img>
                    <h1 className="mt-10 font-semibold">Joshua Allison</h1>
                    <p className="">Bio saying something not sure what...</p>
                    <ul className="flex flex-col mt-auto h-screen dark:bg-gray-800 dark:border-gray-700 justify-between ">
                        <li className="border-2 border-slate-700">Post 1</li>
                        <li className="border-2 border-slate-700">Post 2</li>
                        <li className="border-2 border-slate-700">Post 3</li>
                        <li className="border-2 border-slate-700">Post 4</li>
                        <li className="border-2 border-slate-700">Post 5</li>
                    </ul>
                </div>
                <div className="absolute inset-y-0 right-0 w-32 h-screen bg-slate-600">
                    <div className="flex h-screen justify-center items-center">
                        <ul>
                            <li>Stuff</li>
                            <li>More</li>
                            <li>Stuff</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;