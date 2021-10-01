import './assets/styles/styles.scss';
import React, { useEffect, useState } from 'react';
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

  return (
    <div className='app'>
      <SearchBar />
    </div>
  );
};
export default App;
