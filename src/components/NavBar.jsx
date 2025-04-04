import React from 'react';
import Logo from './Logo';
import CategoryNav from './CategoryNav';

const NavBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {/* Logo fixed at top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Logo />
      </div>
      
      {/* Category navigation fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <CategoryNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </>
  );
};

export default NavBar;
