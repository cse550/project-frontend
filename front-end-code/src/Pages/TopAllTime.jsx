import React from "react";
import LeftColumn from '../Components/LeftColumn';
import RightColumn from '../Components/RightColumn';

function TopAllTime() {

  return (
    <div className="flex h-screen">
      <div className="h-screen w-1/4"> { /* left column */ }
        <LeftColumn />
      </div>
      <div className="h-screen w-1/2 border-2"> { /* middle column */ }
        <div className="text-4xl text-center">
            <h1 className="text-blue-600 font-bold">Top Posts of All Time</h1>
        </div>
      </div> { /* end of middle column */ }
      <div className="h-screen w-1/4"> { /* third column */ }
        <RightColumn />
      </div>
    </div>
  );
}

export default TopAllTime;