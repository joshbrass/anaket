import React from 'react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center">
      <button onClick={toggleSidebar} className="md:hidden focus:outline-none mr-4">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <h1 className="text-lg flex-grow">My Dashboard</h1>
    </nav>
  );
};

export default Navbar;