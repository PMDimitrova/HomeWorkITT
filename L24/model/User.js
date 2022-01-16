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
    addRemoveRecipeToFavorites(recipe){
        if (this.getIndexOfRecipe(recipe) === -1){
            this.favoriteRecipes.push(recipe);
            console.log(recipe.title + " added");
            return 1;
        }else {
            this.favoriteRecipes.splice(this.getIndexOfRecipe(recipe), 1);
            console.log(recipe.title + " removed");
            return -1;
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

    getIndexOfRecipe(recipe){
        let index = -1;
        for (let i = 0; i < this.favoriteRecipes.length; i++) {
            if (this.favoriteRecipes[i].title === recipe.title){
                index = i;
                break;
            }
        }
        return index;
    }

    getFavoriteRecipes(){
        return this.favoriteRecipes;
    }
}