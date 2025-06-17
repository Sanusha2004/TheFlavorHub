const form = document.getElementById("recipeForm");
const container = document.getElementById("recipesContainer");

const API_URL = "https://your-backend-url.onrender.com";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  const res = await fetch(`${API_URL}/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, ingredients, instructions }),
  });

  const newRecipe = await res.json();
  addRecipeToDOM(newRecipe);
  form.reset();
});

async function fetchRecipes() {
  const res = await fetch(`${API_URL}/recipes`);
  const recipes = await res.json();
  recipes.forEach(addRecipeToDOM);
}

function addRecipeToDOM(recipe) {
  const div = document.createElement("div");
  div.className = "recipe";
  div.innerHTML = `
    <h3>${recipe.title}</h3>
    <strong>Ingredients:</strong>
    <p>${recipe.ingredients}</p>
    <strong>Instructions:</strong>
    <p>${recipe.instructions}</p>
  `;
  container.prepend(div);
}

fetchRecipes();
