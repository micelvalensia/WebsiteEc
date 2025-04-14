import React from "react";

const TrashIcon = ({klik}) => {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="text-white hover:text-gray-700 transition duration-200 bg-red-700 p-1 rounded"
      onClick={klik}
    >
      <path
        d="M3 6h18M5 6l1 14h12l1-14M10 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 6h8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashIcon;
