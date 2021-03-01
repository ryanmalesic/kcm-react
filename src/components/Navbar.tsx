import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const location = useLocation();

  const pathParts = location.pathname.split('/').filter((pathPart) => pathPart.length);

  return (
    <nav className="bg-white border-b-2 borger-gray-200">
      <div className="flex items-center justify-between px-4 py-2 mx-6 border-b border-gray-200">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img className="h-8" src={logo} alt="Karns Prime &amp; Fancy Foods logo" />
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-gray-900" to="/upload">
            Upload
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
            to="/missing-items"
          >
            Missing Items
          </Link>
        </div>
      </div>

      <div className="flex items-center py-2 mx-6 space-x-4">
        <Link className="text-gray-400 focus:outline-none hover:text-gray-900" to="/">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>

        {pathParts.length === 0 && <span className="text-sm text-gray-400">/</span>}

        {pathParts.map((pathPart, index, array) => (
          <div className="space-x-4" key={pathPart}>
            <span className="text-sm text-gray-400">/</span>
            <Link
              className="text-sm text-gray-600 focus:outline-none hover:text-gray-900"
              to={`/${array.slice(0, index + 1).join('/')}`}
            >
              {pathPart
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
