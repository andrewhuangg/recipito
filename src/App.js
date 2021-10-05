import './assets/styles/styles.scss';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './components/SearchBar';
import RecipeItem from './components/RecipeItem';

const App = () => {
  const APP_ID = process.env.REACT_APP_RECIPE_ACC_ID;
  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('beef');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );

    const data = await res.json();
    setRecipes(data.hits);
  };

  const handleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode((prevMode) => !prevMode);
    const body = document.querySelector('body');
    if (!isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  };

  const recipeList = () => {
    return (
      <div className='recipes'>
        {recipes.map((rec) => {
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
      </div>
    );
  };

  return (
    <div className='app'>
      <div className='topbar'>
        <SearchBar setQuery={setQuery} handleDarkMode={handleDarkMode} />
      </div>
      {recipeList()}
    </div>
  );
};
export default App;
