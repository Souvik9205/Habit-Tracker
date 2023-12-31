import React from "react";

const Header = ({ toggleSidebar }) => {
    return (
        <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">Header</h1>
          <button
            className="focus:outline-none text-xl" 
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </header>
    );
};

export default Header;