// CategoryLink.js
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ category }) => {
  return <Link to={`/category/${category}`}>{category}</Link>;
};

export default CategoryLink;
