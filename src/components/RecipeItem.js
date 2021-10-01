import React from 'react';

const RecipeItem = ({ name, image, calories, ingredients, source, url }) => {
  return (
    <div className='recipeitem'>
      <h1>{name}</h1>
      <p>{calories}</p>
      <img src={image} alt='recipe image' />
    </div>
  );
};

export default RecipeItem;
