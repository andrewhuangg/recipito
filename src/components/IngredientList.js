import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const IngredientList = ({ ingredients }) => {
  return (
    <div className='ingredientlist'>
      <ul className='ingredientlist__ul'>
        {ingredients.map((ingredient) => (
          <li key={uuidv4()}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
