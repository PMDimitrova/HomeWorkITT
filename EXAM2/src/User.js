class User{
    constructor() {
        this.name = '';
        this.age = '';
        this.address = '';
        this.profilePic = '';
        this.favoriteRecipes = []; //array with recipes objs
        this.cookedRecipes = {}; //{recipeTitle: countOfCooking,...}
    }

    changeName (name){
        this.name = name;
    }
    changeAge (age){
        this.age = age;
    }
    changeAddress(address){
        this.address = address;
    }
    changeProfilePic(pic){
        document.getElementById('profile-pic').src = pic;
    }
    addRecipeToFavorites(recipe){
        if (this.favoriteRecipes.indexOf(recipe) === -1){
            this.favoriteRecipes.push(recipe);
        }
    }
    removeFromFavorites(recipe){
        let indexOfRecipe = this.favoriteRecipes.indexOf(recipe);
        if ( indexOfRecipe !== -1){
            this.favoriteRecipes.splice(indexOfRecipe, 1);
        }
    }

    cookRecipe(recipe){
        let recipeName = recipe.title;
        if (this.cookedRecipes[recipeName] === undefined){
            this.cookedRecipes[recipeName] = 1;
        }else {
            this.cookedRecipes[recipeName] = this.cookedRecipes[recipeName] + 1;
        }
        console.log(recipeName + ' is cooked one more time');
    }
}