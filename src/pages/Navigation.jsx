import React from 'react';

const Navigation = () => (
  <nav className="mb-6 w-full">
    <ul className="flex space-x-0 w-full">
      <li className="flex-grow"><a href="#about" className="text-blue-500 hover:underline block text-center w-full -m-1">About</a></li>
      <li className="flex-grow"><a href="#experience" className="text-blue-500 hover:underline block text-center w-full -m-1">Experience</a></li>
      <li className="flex-grow"><a href="#education" className="text-blue-500 hover:underline block text-center w-full -m-1">Education</a></li>
      <li className="flex-grow"><a href="#skills" className="text-blue-500 hover:underline block text-center w-full -m-1">Skills</a></li>
      <li className="flex-grow"><a href="#languages" className="text-blue-500 hover:underline block text-center w-full -m-1">Language</a></li>
      <li className="flex-grow"><a href="#contact" className="text-blue-500 hover:underline block text-center w-full -m-1">Contact</a></li>
      <li className="flex-grow"><a href="#projects" className="text-blue-500 hover:underline block text-center w-full -m-1">Projects</a></li> 
    </ul>
  </nav>
);

export default Navigation;