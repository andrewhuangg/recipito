import React, { useState } from 'react';
import IngredientList from './IngredientList';

const RecipeItem = ({ name, image, calories, ingredients, source, url }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  return (
    <div className='recipeitem accordion'>
      <div className='accordion__body'>
        <h1>{name}</h1>
        <img src={image} alt='recipe image' />

        <hr />

        <div
          className={`accordion__container ${toggle && 'accordion__container--active'}`}
          onClick={handleToggle}
        >
          <div className='accordion__label'>Ingredients</div>
          <div className='accordion__content'>
            <IngredientList ingredients={ingredients} />
          </div>
        </div>

        <hr />

        <div
          className={`accordion__container ${toggle && 'accordion__container--active'}`}
          onClick={handleToggle}
        >
          <div className='accordion__label'>Calories</div>
          <div className='accordion__content'>{Math.round(calories)}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
