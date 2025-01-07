import React from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`h-full w-64 bg-gray-800 text-white fixed z-30 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={toggleSidebar} className="focus:outline-none text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul className="p-4">
        <li className="py-2">Dashboard</li>
        <li className="py-2">Profile</li>
        <li className="py-2">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;