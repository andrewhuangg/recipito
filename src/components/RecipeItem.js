import React from 'react';
import IngredientList from './IngredientList';
import AccordionContainer from './AccordionContainer';

const RecipeItem = ({ name, image, calories, ingredients, source, url }) => {
  return (
    <div className='recipeitem accordion'>
      <div className='accordion__body'>
        <div className='recipeitem__wrapper'>
          <h1>{name}</h1>
          <img src={image} alt='recipe image' />
        </div>

        <AccordionContainer>
          <div className='accordion__label'>Ingredients</div>
          <div className='accordion__content'>
            <IngredientList ingredients={ingredients} />
          </div>
        </AccordionContainer>
        <hr />
        <AccordionContainer>
          <div className='accordion__label'>Calories</div>
          <div className='accordion__content'>{Math.round(calories)}</div>
        </AccordionContainer>
        <hr />
        <AccordionContainer>
          <div className='accordion__label'>Source</div>
          <div className='accordion__content'>{source}</div>
        </AccordionContainer>
        <hr />
        <AccordionContainer>
          <div className='accordion__label'>Link</div>
          <div className='accordion__content'>{url}</div>
        </AccordionContainer>
      </div>
    </div>
  );
};

export default RecipeItem;
