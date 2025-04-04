import React from 'react';

const CategoryNav = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'trending',
    'action',
    'comedy',
    'romance',
    'horror',
    'documentaries'
  ];

  return (
    <div className="py-1">
      {/* Constrain container width and center it */}
      <div className="mx-auto flex gap-2 items-center" style={{ maxWidth: '90%' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`capitalize transition duration-200 px-2 py-1 rounded-md whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-red-700 text-white'
                : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
