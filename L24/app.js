window.addEventListener('load', function () {
    let allRecipes = document.getElementById('all-recipes');
    let favorites = document.getElementById('favorites');
    let create = document.getElementById('create');
    let profile = document.getElementById('profile');
    let errorPage = document.getElementById('error-page');
    let selectField = document.getElementById('select-ingredient');
    let ingredientsFilterDiv = document.getElementsByClassName('ingredients-filter')[0];
    let searchFieldDiv = document.getElementsByClassName('search-recipe')[0];


    function changeFilterAndSearchVisibility(changeTo) {

        if (changeTo === 'flex') {
            ingredientsFilterDiv.style.display = 'flex';
            searchFieldDiv.style.display = 'flex';
        } else {
            ingredientsFilterDiv.style.display = 'none';
            searchFieldDiv.style.display = 'none';
        }
    }

    changeFilterAndSearchVisibility('none');

    let user = new User();
    let recipesManager = new RecipesManager();

    recipes.forEach(rec => {
        let newRec = new Recipe(rec.title, rec.href, rec.ingredients, rec.thumbnail, liked = 'false');
        console.log(newRec)
        recipesManager.addRecipe(newRec);
    });

    Handlebars.registerHelper('json', function (context) {
        return JSON.stringify(context);
    });

    let templateHTML = document.getElementById('recipe-card-template').innerHTML;
    let cardTemplate = Handlebars.compile(templateHTML);

    let templateIngredientHTML = document.getElementById('select-single-option').innerHTML;
    let ingredientTemplate = Handlebars.compile(templateIngredientHTML);

    window.likeRecipe = function (rec) {
        //we receive an object, on which the function is called, and then we should search if we have the same obj already
        user.addRemoveRecipeToFavorites(rec);
        let likeBtn = document.getElementById(`like-btn-${rec.title}`);
        if (likeBtn.innerText === 'Премахни от любими') {
            likeBtn.innerText = 'Добави в любими';
        } else {
            likeBtn.innerText = 'Премахни от любими';
        }
    }
    window.cookRecipe = function (rec) {
        //we receive an object, on which the function is called, and then we should search if we have the same obj already
        user.cookRecipe(rec);
    }

    function createNewRecipe() {
        let createBtn = document.getElementById('save-recipe');
        createBtn.disabled = true;

        let title = document.getElementById('rec-title');
        let ingredients = document.getElementById('rec-ingredients');
        let href = document.getElementById('rec-link');
        let thumbnail = document.getElementById('rec-image');

        let allFields = {
            title: '',
            ingredients: '',
            href: '',
            thumbnail: '',
            allFilled: false,
            checkFields() {
                if (this.title && this.href && this.thumbnail && this.ingredients) {
                    allFields = true;
                    createBtn.disabled = false;
                    return true;
                }
                return false;
            }
        }

        title.addEventListener('change', (event) => {
            event.stopImmediatePropagation();
            allFields.title = title.value.trim();
            allFields.checkFields();
        });
        ingredients.addEventListener('change', (event) => {
            event.stopImmediatePropagation();
            allFields.ingredients = ingredients.value.trim();
            allFields.checkFields();
        });
        href.addEventListener('change', (event) => {
            event.stopImmediatePropagation();
            allFields.href = href.value.trim();
            allFields.checkFields();
        });
        thumbnail.addEventListener('change', (event) => {
            event.stopImmediatePropagation();
            allFields.thumbnail = thumbnail.value.trim();
            allFields.checkFields();
        });

        createBtn.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopImmediatePropagation();

            let newRecipe = new Recipe(title.value.trim(), href.value.trim(),
                ingredients.value.trim(), thumbnail.value.trim(), false);
            recipesManager.addRecipe(newRecipe);
        });
    }

    let displayUsersProfile = function () {
        profile.innerHTML = '';
        let userProfileWrapper = document.createElement('div');
        userProfileWrapper.classList.add('user-profile-wrapper');

        let userFormDiv = document.createElement('div');
        userFormDiv.classList.add('user-form');

        let createInputField = function (name, innerText, type) {
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

        button.addEventListener('click', function (event) {
            let name = document.getElementById('user-name').value;
            let age = document.getElementById('user-age').value;
            let address = document.getElementById('user-address').value;
            let picture = document.getElementById('user-picture').value;

            if ((name.trim().length > 0) && (age > 0) && (address.trim().length > 0) && (picture.trim().length > 0)) {
                user.changeName(name);
                user.changeAge(age);
                user.changeAddress(address);
                user.changeProfilePic(picture);
            } else {
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

        for (const [uuid, count] of Object.entries(user.cookedRecipes)) {
            let title = recipesManager.getRecByUuid(uuid).title;
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

    let handleHashChange = function () {
        let hash = location.hash.slice(1);

        function fillSelectWithOptions() {
            let allRecipes = recipesManager.getAllRecipes();
            let allIngredients = [];
            console.log(allRecipes)
            allRecipes.map(rec => {
                let recIngr = rec.ingredients.split(', ');
                recIngr.forEach(ingr => {
                    if (allIngredients.indexOf(ingr) === -1) {
                        allIngredients.push(ingr);
                    }
                });
            });
            allIngredients = allIngredients.sort();
            selectField.innerHTML = ingredientTemplate({allIngredients});
        }

        if (hash === 'all-recipes') {
            allRecipes.style.display = 'flex';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            let recToRender = recipesManager.getAllRecipes();
            allRecipes.innerHTML = cardTemplate({recToRender});
            fillSelectWithOptions();

            document.getElementById('select-ingredient').addEventListener('change', () => {
                let selectedOption = document.getElementById('select-ingredient').value;
                let allRec = recipesManager.getAllRecipes();
                let recToRender = [];
                if (selectedOption === 'allspice'){
                    recToRender = allRec;
                }else{
                    recToRender = allRec.filter(each => {
                        return each.ingredients.indexOf(selectedOption) !== -1;
                    });
                }
                allRecipes.innerHTML = '';
                allRecipes.innerHTML = cardTemplate({recToRender});
            });

            document.getElementById('search-field').addEventListener('keyup', () => {
                let input = document.getElementById('search-field').value.toLowerCase();
                let allRec = recipesManager.getAllRecipes();
                allRecipes.innerHTML = '';
                let recToRender = allRec.filter(each => each.title.toLowerCase().includes(input));
                allRecipes.innerHTML = cardTemplate({recToRender});
            });
            changeFilterAndSearchVisibility('flex');

        } else if (hash === 'favorites') {
            allRecipes.style.display = 'none';
            favorites.style.display = 'flex';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            let recToRender = user.getFavoriteRecipes();
            if (recToRender.length === 0) {
                favorites.innerHTML = 'Няма любими рецепти';
            } else {
                favorites.innerHTML = cardTemplate({recToRender});
            }
            changeFilterAndSearchVisibility('none');
        } else if (hash === 'create') {
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'flex';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            createNewRecipe();
            changeFilterAndSearchVisibility('none');
        } else if (hash === 'profile') {
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'flex';
            errorPage.style.display = 'none';
            displayUsersProfile();
            changeFilterAndSearchVisibility('none');
        } else if (hash === '') {
            allRecipes.style.display = 'flex';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'none';
            let allRec = recipesManager.getAllRecipes();
            allRecipes.innerHTML = cardTemplate({allRec});
            changeFilterAndSearchVisibility('flex');
        } else {
            allRecipes.style.display = 'none';
            favorites.style.display = 'none';
            create.style.display = 'none';
            profile.style.display = 'none';
            errorPage.style.display = 'flex';
            changeFilterAndSearchVisibility('none');
        }
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
});