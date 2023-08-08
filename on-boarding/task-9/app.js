// app.js
const recipes = [
    {
      id: 1,
      name: 'Recipe 1',
      image: 'https://i.imgur.com/7vQD0fPs.jpg',
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
      instructions: ['Step 1', 'Step 2', 'Step 3'],
    },
    {
      id: 2,
      name: 'Recipe 2',
      image: 'https://i.imgur.com/7vQD0fPs.jpg',
      ingredients: ['Ingredient A', 'Ingredient B', 'Ingredient C'],
      instructions: ['Step A', 'Step B', 'Step C'],
    },
    // Add more recipes as needed
  ];
  
  // Get recipe list element
  const recipeList = document.getElementById('recipeList');
  
  // Render recipe list
  recipes.forEach(recipe => {
    const recipeItem = document.createElement('div');
    recipeItem.className = 'bg-gray-100 p-4 rounded-lg';
    recipeItem.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" class="w-full mb-2">
      <h3 class="text-lg font-bold">${recipe.name}</h3>
    `;
    recipeItem.addEventListener('click', () => showRecipeDetails(recipe));
    recipeList.appendChild(recipeItem);
  });
  
  // Get recipe details elements
  const recipeDetails = document.getElementById('recipeDetails');
  const recipeImage = document.getElementById('recipeImage');
  const recipeName = document.getElementById('recipeName');
  const recipeIngredients = document.getElementById('recipeIngredients');
  const recipeInstructions = document.getElementById('recipeInstructions');
  const backButton = document.getElementById('backButton');
  
  // Function to show recipe details
  function showRecipeDetails(recipe) {
    recipeImage.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}" class="w-full">`;
    recipeName.textContent = recipe.name;
    recipeIngredients.innerHTML = '';
    recipe.instructions.forEach(instruction => {
      const li = document.createElement('li');
      li.textContent = instruction;
      recipeInstructions.appendChild(li);
    });
    recipeDetails.classList.remove('hidden');
    recipeList.classList.add('hidden');
  }
  
  // Function to go back to recipe list
  function goBack() {
    recipeDetails.classList.add('hidden');
    recipeList.classList.remove('hidden');
  }
  
  // Add event listener to back button
  backButton.addEventListener('click', goBack);