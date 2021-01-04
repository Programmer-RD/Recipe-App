import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Rescipe";
const App = () => {
  const APP_ID = "57c6a953";
  const APP_KEY = "6e5172a8d5c0724d9e4a98741177248c";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRescipes();
  }, [query]);
  const getRescipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const update_search = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={update_search}
        />
        <button disabled={!search} type="submit" className="search-button">
          Search
        </button>
      </form>
      <center>
        <h4>
          <b>Search the Name of the food item that you need the recipe for ex : pizza,fried rice,etc...</b>
        </h4>
      </center>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.title}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
