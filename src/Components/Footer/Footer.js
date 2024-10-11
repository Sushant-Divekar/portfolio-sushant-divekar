import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-300 text-black text-center">
      <p className="mb-4">Connect with me:</p>
      <div className="space-x-4">
        <a href="https://github.com/Sushant-Divekar" className="hover:text-blue-800">GitHub</a>
        <a href="https://www.linkedin.com/in/sushant-divekar-0a79952a0/" className="hover:text-blue-800">LinkedIn</a>
        <a href="sushantsd2001@gmail.com" className="hover:text-blue-800">Email</a>
      </div>
      <p className="mt-4">&copy; 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
