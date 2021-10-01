import './assets/styles/styles.scss';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './components/SearchBar';
import RecipeItem from './components/RecipeItem';

const App = () => {
  const APP_ID = process.env.REACT_APP_RECIPE_ACC_ID;
  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const data = await res.json();
    setRecipes(data.hits);
  };

  const recipeList = () => {
    return (
      <>
        {recipes.map((rec, idx) => {
          return (
            <RecipeItem
              key={uuidv4()}
              name={rec.recipe.label}
              image={rec.recipe.image}
              calories={rec.recipe.calories}
              ingredients={rec.recipe.ingredients}
              source={rec.recipe.source}
              url={rec.recipe.url}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className='app'>
      <SearchBar />
      {recipeList()}
    </div>
  );
};
export default App;
