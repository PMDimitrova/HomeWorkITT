window.addEventListener('load', function () {
    let homePage = document.getElementById('home-page');
    let catalogue = document.getElementById('catalogue');
    let saved = document.getElementById('saved');
    let cart = document.getElementById('cart');
    let contactPage = document.getElementById('contacts');

    let manager = new ItemsManager;
    let user = new User;

    equipment.forEach(fitItem => {
        let fitnessItem = new Item(
            fitItem.id, fitItem.itemName, fitItem.type, fitItem.kg, fitItem.price, fitItem.availability, fitItem.picture);

        manager.add(fitnessItem);
    });

    console.log(manager.items)

    let displayItems = function (inputItems, targetToRender) {
        targetToRender.innerHTML = '';
        inputItems.forEach(fitItem => {
            let cardBox = document.createElement('div');
            cardBox.classList.add('card-item');

            let pictureBox = document.createElement('img');
            pictureBox.classList.add('picture-item');
            pictureBox.src = fitItem.picture;

            let titleBox = document.createElement('div');
            titleBox.innerText = fitItem.itemName;

            let priceBox = document.createElement('div');
            priceBox.classList.add('price-item');
            priceBox.innerText = '€' + fitItem.price;

            let buttonsSection = document.createElement('div');

            let buyBtn = document.createElement('button');
            // if (!user.isInCart(fitItem)) {
            //     buyBtn.innerText = 'Buy';
            //     buyBtn.addEventListener('click', function () {
            //         user.putInCart(fitItem);
            //     });
            //     if (targetToRender === catalogue){
            //         displayItems(manager.items, page);
            //     }else if (targetToRender === cart){
            //         displayItems(user.cartItems, targetToRender);
            //     }else if(targetToRender === saved){
            //         displayItems(user.savedItems, targetToRender);
            //     }
            // } else {
            //     buyBtn.innerText = 'In cart';
            //     buyBtn.addEventListener('click', function () {
            //         user.removeFromCart(fitItem);
            //     });
            // }


            let saveBtn = document.createElement('button');
            saveBtn.innerText = 'Save';

            buttonsSection.append(buyBtn, saveBtn);

            cardBox.append(pictureBox, titleBox, priceBox, buttonsSection);
            targetToRender.append(cardBox);
        });
    }

    let handleHashChange = function () {
        let hash = location.hash.slice(1);
        switch (hash) {
            case 'home':
                homePage.style.display = 'flex';
                catalogue.style.display = 'none';
                saved.style.display = 'none';
                cart.style.display = 'none';
                contactPage.style.display = 'none';
                displayItems(manager.items, homePage); //todo change to categories
                break;
            case 'all-items':
                homePage.style.display = 'none';
                catalogue.style.display = 'flex';
                saved.style.display = 'none';
                cart.style.display = 'none';
                contactPage.style.display = 'none';
                displayItems(manager.items, catalogue);
                break;
            case 'saved':
                homePage.style.display = 'none';
                catalogue.style.display = 'none';
                saved.style.display = 'flex';
                cart.style.display = 'none';
                contactPage.style.display = 'none';
                displayItems(user.savedItems, saved);
                break;
            case 'cart':
                homePage.style.display = 'none';
                catalogue.style.display = 'none';
                saved.style.display = 'none';
                cart.style.display = 'flex';
                contactPage.style.display = 'none';
                displayItems(user.itemsInCart, cart);
                break;
            case 'contacts':
                homePage.style.display = 'none';
                catalogue.style.display = 'none';
                saved.style.display = 'none';
                cart.style.display = 'none';
                contactPage.style.display = 'flex';
                break;

        }
    }
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

});