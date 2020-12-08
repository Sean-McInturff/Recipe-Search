import React from 'react';
import style from './recipe.module.css'
import uuid from 'react-uuid'


const Recipe = ({title, calories, image, ingredients, url}) => {

    const roundedCalories = Math.round(calories)

    return(
        <div className={style.recipe}>
            <a href={url} target="_blank" rel="noopener noreferrer"><h1>{title}</h1></a>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={uuid()}>{ingredient.text}</li>
                ))}
            </ul>
            <p><strong>Calories -</strong> {roundedCalories} </p>
            <img className={style.image} src={image} alt =""/>
        </div>

    );
}

export default Recipe;