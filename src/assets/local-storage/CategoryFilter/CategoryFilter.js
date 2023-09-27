// CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <select onChange={onSelectCategory}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
