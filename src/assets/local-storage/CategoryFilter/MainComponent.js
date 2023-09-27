// MainComponent.js
import React, { useState } from 'react';
import data from './data';
import ImageComponent from './ImageComponent';
import CategoryFilter from './CategoryFilter';

const MainComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('nature');

  const categories = [...new Set(data.map(item => item.category))];

  const filteredImages = data.filter(
    item => item.category === selectedCategory
  );

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <CategoryFilter
        categories={categories}
        onSelectCategory={handleCategoryChange}
      />
      {filteredImages.map(item => (
        <ImageComponent key={item.id} image={item.image} />
      ))}
    </div>
  );
};

export default MainComponent;
