import React from "react";

function RightColumn() {

    return (

        <div className="py-6 px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-4">
                        <div classNameName="relative">
                            <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                            <input type="text" class="bg-slate-200 h-14 w-full px-10 rounded-full focus:outline-none hover:cursor-pointer" name="" placeholder="Search.."></input>
                            <span class="absolute top-4 right-5 border-l pl-4"><i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RightColumn;