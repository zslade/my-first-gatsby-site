import * as React from 'react';
// link is a prebuilt component maintained by gatsby
import {
  categoryKey, active, inactive
} from '../css/categoryKey.module.css';

const CategoryKey = ({ currentCategory }) => {
  const categories = ['Technology', 'Maths', 'Art', 'Nature', 'Other', 'External'];

  return (
    <div className={categoryKey}>
      {categories.map((category) => (
        <div
          key={category}
          className={currentCategory === category ? active : inactive}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryKey;
