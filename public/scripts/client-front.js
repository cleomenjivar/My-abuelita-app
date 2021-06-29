// FRONT END FILE TO INTERACT WITH THE DOM

const searchRecipeBtn = document.getElementById('btn-searchRecipe');



// FETCH THE RECIPES FROM THE APP

const searchRecipes = (recipe) => {
    recipe-display.innerHTML = ""

fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi", {
	"method": "POST",
	"headers": {
		"content-type": "text/plain",
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	},
	"body": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//ENTRE POINTS

searchRecipeBtn.addEventListener('click',(event) => {
    let input = document.getElementById("searchInput")
    console.log(input.value)
    searchRecipes(input.value)
})

