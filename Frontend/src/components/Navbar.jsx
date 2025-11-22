import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🚀 CareerPath AI</h1>
        <span className="text-sm opacity-80">Skill Gap & Roadmap Tool</span>
      </div>
    </nav>
  );
};

export default Navbar;