import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const IngredientList = ({ ingredients }) => {
  return (
    <div className='ingredientlist'>
      <ol className='ingredientlist__ol'>
        {ingredients.map((ingredient) => (
          <li key={uuidv4()}>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default IngredientList;
