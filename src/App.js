import React, {useEffect, useState} from 'react';
import Recipe from './recipe'
import uuid from 'react-uuid';

const App = () => {

  const APP_ID = "4264f90c"
  const APP_KEY = "b6834fb4440105f60712a51eb7355a08"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Cookies')

useEffect( () =>{
  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  };
  getRecipes();
}, [query]);

const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}

  return (
  <div className= "App">
    <header>
      <h1 className='title'>Recipe Search</h1>
    </header>
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar" placeholder="Search for recipes..." value={search} onChange={updateSearch}/>
      <button type='submit' className="search-btn" >
        Search
      </button>
    </form>
    <div className="recipes">
    {recipes.map(recipe => (
      <Recipe
        key={uuid()}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients ={recipe.recipe.ingredients}
        url={recipe.recipe.url}
      />
  ))}
  </div>

  </div>
)}

export default App;