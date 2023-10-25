import React from "react";
import LeftColumn from '../Components/LeftColumn';
import RightColumn from '../Components/RightColumn';

function LOLs() {

  return (
    <div className="flex h-screen">
      <div className="h-screen w-1/4"> { /* left column */ }
        <LeftColumn />
      </div>
      <div className="h-screen w-1/2 border-2"> { /* middle column */ }
        <div className="w-full py-4 border-b-2 text-4xl text-center font-semibold">
          <h1 className="text-slate-700">LOLs</h1>
        </div>
      </div> { /* end of middle column */ }
      <div className="h-screen w-1/4"> { /* third column */ }
        <RightColumn />
      </div>
    </div>
  );
}

export default LOLs;