import React from 'react';
import { Search, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white h-16 px-6 flex items-center justify-between shadow-sm">
      {/* Left: Search + Bell */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        {/* Search Input */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 pr-4 py-2 w-full rounded-md text-sm text-gray-500 focus:outline-none"
          />
        </div>

        {/* Bell Icon */}
        <button className="p-2 relative">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <path
                fill="#3632AC"
                d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.2 27.2 0 0 1-7.296 0M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.4 4.4 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
              />
            </svg>
            {/* <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span> */}
          </div>
        </button>
      </div>

      {/* Right: Avatar + Add */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-md bg-cyan-500 flex items-center justify-center text-white overflow-hidden">
          <img src="../../public/assets/female.png" className="p-1" />
        </div>

        <button className="w-8 h-8 rounded-md bg-[#3533A3] flex items-center justify-center text-white">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
