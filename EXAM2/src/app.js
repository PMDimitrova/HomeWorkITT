window.addEventListener('load', function (){
    let allRecipes = document.getElementById('all-recipes');
    let favorites = document.getElementById('favorites');
    let create = document.getElementById('create');
    let profile = document.getElementById('profile');
    let errorPage = document.getElementById('error-page');

    let user = new User();
    let recipesManager = new RecipesManager();

    recipes.forEach(rec => {
        let newRec = new Recipe(rec.title, rec.href, rec.ingredients, rec.thumbnail);
        recipesManager.addRecipe(rec);
    });

    let displayRecipes = function (recipes, page){
        page.innerHTML = '';

        recipes.forEach(rec => {
            let card = document.createElement('div');
            card.classList.add('card');

            let divImgWrap = document.createElement('div');
            divImgWrap.classList.add('rec-image-wrapper');

            let linkToRec = document.createElement('a');
            linkToRec.href = rec.href;
            linkToRec.target = '_blank'

            let recImage = document.createElement('img');
            recImage.classList.add('rec-image');
            recImage.src = rec.thumbnail;
            recImage.alt = 'dish-image';

            linkToRec.append(recImage);
            divImgWrap.append(linkToRec);

            let recTitle = document.createElement('h3');
            recTitle.classList.add('rec-title');
            recTitle.innerText = rec.title;

            let recIngredients = document.createElement('div');
            recIngredients.classList.add('rec-ingredients');
            recIngredients.innerText = rec.ingredients;

            let buttonBox = document.createElement('div');
            buttonBox.classList.add('buttons-box');

            let likeBtn = document.createElement('button');
            likeBtn.classList.add('rec-buttons');
            likeBtn.id = 'like-btn';
            if (user.favoriteRecipes.indexOf(rec) === -1){
                likeBtn.innerText = 'Добави в любими';
                likeBtn.addEventListener('click', function (){
                    user.addRecipeToFavorites(rec);
                    if (page === allRecipes){
                        displayRecipes(recipesManager.recipes, page);
                    }else if (page === favorites){
                        displayRecipes(user.favoriteRecipes, page);
                    }
                });
            }else{
                likeBtn.innerText = 'Премахни от любими';
                likeBtn.addEventListener('click', function (){
                    user.removeFromFavorites(rec);
                    if (page === allRecipes){
                        displayRecipes(recipesManager.recipes, page);
                    }else if (page === favorites){
                        displayRecipes(user.favoriteRecipes, page);
                    }
                });
            }

            let cookBtn = document.createElement('button');
            cookBtn.classList.add('rec-buttons');
            cookBtn.id = 'cook-btn';
            cookBtn.innerText = 'Сготви';
            cookBtn.addEventListener('click', function (){
               user.cookRecipe(rec);
            });

            buttonBox.append(likeBtn, cookBtn);

            card.append(divImgWrap, recTitle, recIngredients, buttonBox);
            page.append(card);
        });

    }

    let displayUsersProfile = function (){
        profile.innerHTML = '';
        let userProfileWrapper = document.createElement('div');
        userProfileWrapper.classList.add('user-profile-wrapper');

        let userFormDiv = document.createElement('div');
        userFormDiv.classList.add('user-form');

        let createInputField = function (name, innerText, type){
            let outerDiv = document.createElement('div');
            outerDiv.classList.add('input-box');
            outerDiv.classList.add(`${name}-box`);

            let label = document.createElement('label');
            label.for = `user-${name}`;
            label.innerText = innerText;

            let inputField = document.createElement('input');
            inputField.id = `user-${name}`;
            inputField.type = type;

            outerDiv.append(label, inputField);
            userFormDiv.append(outerDiv);
            userProfileWrapper.append(userFormDiv);
        }

        createInputField('name', 'Име: ', 'text');
        createInputField('age', 'Години: ', 'number');
        createInputField('address', 'Адрес: ', 'text');
        createInputField('picture', 'Снимка: ', 'text');

        let button = document.createElement('button');
        button.id = 'save-btn';
        button.innerText = 'Запази';

        button.addEventListener('click', function (event){
            let name = document.getElementById('user-name').value;
            let age = document.getElementById('user-age').value;
            let address = document.getElementById('user-address').value;
            let picture = document.getElementById('user-picture').value;

            if ((name.trim().length > 0) && (age>0) && (address.trim().length > 0) && (picture.trim().length > 0)){
                user.changeName(name);
                user.changeAge(age);
                user.changeAddress(address);
                user.changeProfilePic(picture);
            }else {
                alert('Моля попълни всички полета с коректни данни!');
            }
        });

        profile.append(userProfileWrapper);

        userFormDiv.append(button);

        let tableDiv = document.createElement('div');
        tableDiv.classList.add('user-recipes-table');

        let tableHeading = document.createElement('h3');
        tableHeading.innerText = 'Моите сготвени рецепти';
        tableDiv.append(tableHeading);
        
        let table = document.createElement('table');
        table.classList.add('table-cooked-user-profile');

        for (const [title, count] of Object.entries(user.cookedRecipes)) {
            let row = document.createElement('tr');
            row.classList.add('table-row');
            let cellName = document.createElement('td');
            cellName.innerText = title;

            let cellCount = document.createElement('td');
            cellCount.classList.add('cell-count');

            cellCount.innerText = count;

            row.append(cellName, cellCount);
            table.append(row);
        }
        tableDiv.append(table);

        userProfileWrapper.append(tableDiv);
    }

    let handleHashChange = function (){
        let hash = location.hash.slice(1);

        if (hash === 'all-recipes'){
            allRecipes.style.display = 'flex';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            displayRecipes(recipesManager.recipes, allRecipes);
        }else if (hash === 'favorites'){
            allRecipes.style.display = 'none';
            favorites.style.display = 'flex';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            displayRecipes(user.favoriteRecipes, favorites);
        }else if (hash === 'create'){
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'flex';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            // todo - display which part
        }else if (hash === 'profile'){
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'flex';
            errorPage.style.display = 'none';
            displayUsersProfile();
        }else if (hash === ''){
            allRecipes.style.display = 'flex';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            displayRecipes(recipesManager.recipes, allRecipes);
        }else{
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'flex';
        }
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
});