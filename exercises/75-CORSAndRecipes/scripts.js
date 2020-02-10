const baseEndpoint = "https://api.punkapi.com/v2/beers";
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector("form.search");
const recipesGrid = document.querySelector(".recipes");
async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?beer_name=${query}`);
  const data = await res.json();
  return data;
}

function displayRecipes(recipes) {
  console.log("Creating HTML");
  const html = recipes.map(recipe => {
    return `<div>
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
    </div>`;
  });
  recipesGrid.innerHTML = html.join("");
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(el.query.value);
  // turn the form off
  el.submit.disabled = true;
  // submit the search
  const recipes = await fetchRecipes(form.query.value);
  console.log(recipes);
  el.submit.disabled = false;
  displayRecipes(recipes);
}

form.addEventListener("submit", handleSubmit);
fetchRecipes("punk");
