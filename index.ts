import recipeData from "./data";
import dataToClass from "./dataToClass";
const wrapper = document.getElementById('wrapper')!
const recipeList = dataToClass(recipeData)

const recipes = dataToClass(recipeData);
if (wrapper === null) {
    throw console.error('element does not exist');
}
for (let c in recipes) {
    let currentRecipe = recipes[c];
    let currentCard = currentRecipe.card();
    wrapper.appendChild(currentCard);
}