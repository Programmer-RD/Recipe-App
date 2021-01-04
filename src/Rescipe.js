import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, key, ingredients }) => {
  return (
    <div className={style.recipe}>
      <br></br>
      <h1>
        <b>Title : {title}</b>
      </h1>
      <h2>
        <b>Ingredients and Method</b>
      </h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li><i>{ingredient.text}</i></li>
        ))}
      </ol>
      <p>
        <b>Calories : {calories}</b>
      </p>
      <img className={style.image} src={image} alt={image}></img>
      <br></br>
    </div>
  );
};
export default Recipe;
// 
