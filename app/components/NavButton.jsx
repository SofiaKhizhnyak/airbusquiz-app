import React from "react";

const NavButton = React.memo(({ label, icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-11/12 flex items-center bg-white rounded border border-gray-800 py-4 shadow-md transition 
    hover:scale-110 hover:bg-blue-900 hover:border-transparent hover:text-white text-gray-700 group"
    aria-label={`Navigate to ${label}`}
  >
    <span className="flex-shrink-0  pl-3 text-[#2f323b4a] group-hover:text-white transition-colors">
      {icon}
    </span>
    <h2 className="flex-1 xs:text-3xl text-2xl font-medium text-center -translate-x-4  ">
      {label}
    </h2>
  </button>
));

export default NavButton;
