class RecipesManager{
    constructor() {
        this.recipes = [];
    }

    addRecipe(rec){
        if ((this.recipes.indexOf(rec) === -1)){
            this.recipes.unshift(rec);
        }
    }
    getAllRecipes(){
        return this.recipes;
    }
}