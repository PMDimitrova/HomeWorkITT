class User{
    constructor() {
        this.name = '';
        this.age = '';
        this.address = '';
        this.profilePic = '';
        this.favoriteRecipesUuids = []; //array with recipes-uuid
        this.cookedRecipes = {}; //{recipeUuid: countOfCooking,...}
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
        let recID = recipe.uuid;
        let indexOfRecipe = this.favoriteRecipesUuids.indexOf(recID);
        if (indexOfRecipe === -1){
            this.favoriteRecipesUuids.push(recID);
            return 1;
        }else {
            this.favoriteRecipesUuids.splice(indexOfRecipe, 1);
            console.log(recipe.title + " removed");
            return -1;
        }
    }

    cookRecipe(recipe){
        let recipeUuid = recipe.uuid;

        if (this.cookedRecipes[recipeUuid] === undefined){
            this.cookedRecipes[recipeUuid] = 1;
        }else {
            this.cookedRecipes[recipeUuid] = this.cookedRecipes[recipeUuid] + 1;
        }
        console.log(recipeUuid + ' is cooked one more time');
    }

    getFavoriteRecipes(){
        return this.favoriteRecipesUuids;
    }
}