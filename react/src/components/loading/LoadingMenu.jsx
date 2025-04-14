import React from 'react';
import { useState } from 'react';

function LoadingMenu() {
  return (
    <div className='flex flex-wrap gap-3'>
        {[...Array(4)].map((_, index) => (
      <div key={index} className='w-full sm:w-[48%] lg:w-[20%] md:max-w-[170px] flex-auto flex flex-col p-3 rounded-lg shadow'>
        <div
          className="w-full h-48 object-cover rounded bg-gray-200 animate-pulse"
        ></div>

        <h4 className='text-md font-medium text-center mt-2 flex-grow bg-gray-200 animate-pulse h-6 rounded-xl'></h4>

        <div className="flex justify-between items-center mx-2 mt-3">
          <h4 className='text-xs flex-grow bg-gray-200 animate-pulse h-4 rounded-xl'></h4>
        </div>
      </div>
        ))}
    </div>
  );
}

export default LoadingMenu;
