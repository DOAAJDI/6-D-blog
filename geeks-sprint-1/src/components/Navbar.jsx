import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-64 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        <Link to="/">StartupLinkUp</Link>
      </h1>
      <ul className="flex flex-col space-y-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
