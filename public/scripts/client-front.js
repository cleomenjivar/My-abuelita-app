// FRONT END FILE TO INTERACT WITH THE DOM

const searchBtn = document.querySelector('#btn-searchRecipe');

// FETCH THE RECIPES FROM THE APP

const searchRecipes = (recipe) => {
	fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4c110f3d05744462b7cc71ca2f2d4735&query=${recipe}`)
	.then(response => response.json())
	.then((data) => {
		console.log(data)
	});
};

// //ENTRY POINTS

searchBtn.addEventListener('click', () => {
    let input = document.getElementById("searchInput")
    console.log(input.value)
    searchRecipes(input.value)
});