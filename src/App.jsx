import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('trending');

  return (
    <div className="relative">
      <NavBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Banner selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
