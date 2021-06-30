// FRONT END FILE TO INTERACT WITH THE DOM

const searchBtn = document.querySelector('.btn-searchRecipe');


// FETCH THE RECIPES FROM THE APP

const searchRecipes = (recipe) => {
    recipe-display.innerHTML = "display-recipe"

// fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi", {
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "text/plain",
// 		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
// 	},
// 	"body": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//ENTRY POINTS

searchBtn.addEventListener('click', (event) => {
    let input = document.getElementById("searchInput")
    console.log(input.value)
    searchRecipes(input.value)
})
};
