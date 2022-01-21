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

    getRecByUuid(inputId){
        let result = {};
        this.recipes.forEach(rec => {
            if (rec.uuid === inputId){
                result = rec;
            }
        })
        return result;
    }
}