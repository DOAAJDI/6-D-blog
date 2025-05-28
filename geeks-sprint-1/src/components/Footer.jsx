import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-16">
      <p className="text-sm flex justify-center">&copy; {new Date().getFullYear()} MyStartup.All rights reserved.</p>
    </footer>
  );
};

export default Footer;