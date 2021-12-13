window.onload = function () {
    let catalogue = document.getElementById('catalogue');
    let saved = document.getElementById('saved');
    let cart = document.getElementById('cart');

    let filterField = document.getElementById('custom-select');4

    let user = new User();
    let manager = new ItemsManager();

    equipment.forEach(fitItem => {
        let item = new FitnessItem(
            fitItem.id, fitItem.itemName, fitItem.type, fitItem.kg, fitItem.price, fitItem.availability, fitItem.picture);
        manager.add(item);
    });

    filterField.addEventListener('change', function (){
        //todo add function
    })

    function displayItems(items, page) {
        page.innerHTML = "";
        items.forEach(fitItem => {

            let div = document.createElement('div');
            div.classList.add('item-box');

            let pic = document.createElement('img');
            pic.src = fitItem.picture;
            pic.alt = 'fitness-equipment';

            let h3 = document.createElement('h3');
            h3.innerHTML = fitItem.itemName;

            let h4 = document.createElement('h4');
            h4.innerHTML = fitItem.price + ' leva';

            let btnsDiv = document.createElement('div');
            btnsDiv.classList.add('item-buttons');

            let buyBtn = document.createElement('button');
            if (!user.isInCart(fitItem)){
                buyBtn.innerText = 'Add to cart';
                buyBtn.addEventListener('click', function (){
                    user.addToCart(fitItem);
                    if (page === catalogue){
                        displayItems(manager.items, page);
                    }else if (page === cart){
                        displayItems(user.cartItems, page);
                    }else if(page === saved){
                        displayItems(user.savedItems, page);
                    }
                });
            }else{
                buyBtn.innerText = 'Remove from cart';
                buyBtn.addEventListener('click', function () {
                    user.removeFromCart(fitItem);
                    if (page === catalogue){
                        displayItems(manager.items, page);
                    }else if (page === cart){
                        displayItems(user.cartItems, page);
                    }else if(page === saved){
                        displayItems(user.savedItems, page);
                    }
                });
            }

            let saveBtn = document.createElement('button');
            if (!user.isSaved(fitItem)){
                saveBtn.innerText = 'Save for later';
                saveBtn.addEventListener('click', function (){
                    user.save(fitItem);
                    if (page === catalogue){
                        displayItems(manager.items, page);
                    }else if (page === cart){
                        displayItems(user.cartItems, page);
                    }else if(page === saved){
                        displayItems(user.savedItems, page);
                    }
                });
            }else {
                saveBtn.innerText = 'Remove from saved';
                saveBtn.addEventListener('click', function (){
                   user.unSave(fitItem);
                    if (page === catalogue){
                        displayItems(manager.items, page);
                    }else if (page === cart){
                        displayItems(user.cartItems, page);
                    }else if(page === saved){
                        displayItems(user.savedItems, page);
                    }
                });
            }

            btnsDiv.append(buyBtn, saveBtn);

            div.append(pic, h3, h4, btnsDiv);

            page.append(div);
        })
    }

    let handleHashChange = function (){
        let hash = location.hash.slice(1);

        switch (hash){
            case 'catalogue':
                catalogue.style.display = 'flex';
                saved.style.display = 'none';
                cart.style.display = 'none';
                displayItems(manager.items, catalogue);
                break;
            case 'saved':
                catalogue.style.display = 'none';
                saved.style.display = 'flex';
                cart.style.display = 'none';
                displayItems(user.savedItems, saved);
                break;
            case 'cart':
                catalogue.style.display = 'none';
                saved.style.display = 'none';
                cart.style.display = 'flex';
                displayItems(user.cartItems, cart);
                break;
            default:
                catalogue.style.display = 'flex';
                saved.style.display = 'none';
                cart.style.display = 'none';
                displayItems(manager.items, catalogue);
                break;
        }
    }

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

}
