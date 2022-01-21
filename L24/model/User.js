class User{
    constructor() {
        this.name = '';
        this.age = '';
        this.address = '';
        this.profilePic = '';
        this.favoriteRecipesUuids = []; //array with recipes-uuid
        this.cookedRecipes = {}; //{recipeUuid: countOfCooking,...}
        this.initiateUser();
    }

    initiateUser(){
        window.localStorage.setItem('user', JSON.stringify({
            name: '',
            age: '',
            address: '',
            profilePic: '',
            favoriteRecipesUuids: [],
            cookedRecipes: {}
        }));
    }
    getUserFromLocalStorage(userName){
        return JSON.parse(window.localStorage.getItem(userName));
    }

    setUserToLocalStorage(userName, userObj){
        window.localStorage.setItem(userName, JSON.stringify(userObj));
    }

    changeName (newName){
        let currentName = 'user';
        if (this.name !== ''){
            currentName = this.name;
        }
        let currentUser = this.getUserFromLocalStorage(currentName);
        window.localStorage.removeItem(currentName);
        this.name = newName;
        currentUser.name = newName;
        this.setUserToLocalStorage(newName, currentUser);
    }

    changeAge (newAge){
        let currentUser = this.getUserFromLocalStorage(this.name);
        window.localStorage.removeItem(this.name);
        this.age = newAge;
        currentUser.age = newAge;
        this.setUserToLocalStorage(this.name, currentUser);
    }
    changeAddress(newAddress){
        let currentUser = this.getUserFromLocalStorage(this.name);
        window.localStorage.removeItem(this.name);
        this.address = newAddress;
        currentUser.address = newAddress;
        this.setUserToLocalStorage(this.name, currentUser);
    }
    changeProfilePic(newPic){
        document.getElementById('profile-pic').src = newPic;
        let currentUser = this.getUserFromLocalStorage(this.name);
        window.localStorage.removeItem(this.name);
        this.profilePic = newPic;
        currentUser.profilePic = newPic;
        this.setUserToLocalStorage(this.name, currentUser);

    }
    addRemoveRecipeToFavorites(recipe){
        let currentName = 'user';
        if (this.name !== ''){
            currentName = this.name;
        }
        let recID = recipe.uuid;
        let currentUser = this.getUserFromLocalStorage(currentName);
        let indexOfRecipe = currentUser.favoriteRecipesUuids.indexOf(recID);
        if (indexOfRecipe === -1){
            this.favoriteRecipesUuids.push(recID);
            currentUser.favoriteRecipesUuids.push('deeba');// todo why not adding it into the array, but swaping it
            console.log(currentUser.favoriteRecipesUuids)
            // currentUser.favoriteRecipesUuids.push(recID);
            // console.log(currentUser.favoriteRecipesUuids);
            // console.log(this.favoriteRecipesUuids)

        //     currentUser.favoriteRecipesUuids.push(recID);
        //     this.setUserToLocalStorage(this.name, currentUser);
        //     // return 1;
        }else {
        //     this.favoriteRecipesUuids.splice(indexOfRecipe, 1);
        //     console.log(recipe.title + " removed");
        //     // return -1;
        }
        //     console.log(currentUser.favoriteRecipesUuids)
    }

    cookRecipe(recipe){
        let recipeUuid = recipe.uuid;

        let currentName = 'user';
        if (this.name !== ''){
            currentName = this.name;
        }

        let currentUser = this.getUserFromLocalStorage(currentName);

        if (this.cookedRecipes[recipeUuid] === undefined){ //todo here he counter breaks if we set to check currentUser.cookedRecipes[recipeUuid]
            this.cookedRecipes[recipeUuid] = 1;
            currentUser.cookedRecipes[recipeUuid] = 1;
        }else {
            this.cookedRecipes[recipeUuid] = this.cookedRecipes[recipeUuid] + 1;
            currentUser.cookedRecipes[recipeUuid] = currentUser.cookedRecipes[recipeUuid] + 1;
        }
        console.log(recipeUuid + ' is cooked one more time');
    }

    getFavoriteRecipes(){
        return this.favoriteRecipesUuids;
    }
}



// class User{
//     constructor() {
//         this.name = '';
//         this.age = '';
//         this.address = '';
//         this.profilePic = '';
//         this.favoriteRecipesUuids = []; //array with recipes-uuid
//         this.cookedRecipes = {}; //{recipeUuid: countOfCooking,...}
//     }
//
//     changeName (name){
//         this.name = name;
//     }
//     changeAge (age){
//         this.age = age;
//     }
//     changeAddress(address){
//         this.address = address;
//     }
//     changeProfilePic(pic){
//         document.getElementById('profile-pic').src = pic;
//     }
//     addRemoveRecipeToFavorites(recipe){
//         let recID = recipe.uuid;
//         let indexOfRecipe = this.favoriteRecipesUuids.indexOf(recID);
//         if (indexOfRecipe === -1){
//             this.favoriteRecipesUuids.push(recID);
//             return 1;
//         }else {
//             this.favoriteRecipesUuids.splice(indexOfRecipe, 1);
//             console.log(recipe.title + " removed");
//             return -1;
//         }
//     }
//
//     cookRecipe(recipe){
//         let recipeUuid = recipe.uuid;
//
//         if (this.cookedRecipes[recipeUuid] === undefined){
//             this.cookedRecipes[recipeUuid] = 1;
//         }else {
//             this.cookedRecipes[recipeUuid] = this.cookedRecipes[recipeUuid] + 1;
//         }
//         console.log(recipeUuid + ' is cooked one more time');
//     }
//
//     getFavoriteRecipes(){
//         return this.favoriteRecipesUuids;
//     }
// }