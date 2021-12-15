class User{
    constructor() {
        this.itemsInCart = [];
        this.savedItems = [];
    }

    putInCart(item){
        if (this.itemsInCart.indexOf(item) === -1){
            this.itemsInCart.push(item);
        }
    }
    removeFromCart(item){
        if (this.itemsInCart.indexOf(item) !== -1){
            this.itemsInCart.remove(item);
        }
    }

    saveItem(item){
        if (this.savedItems.indexOf(item) === -1){
            this.savedItems.push(item);
        }
    }
    removeFromSaved(item){
        if (this.savedItems.indexOf(item) !== -1){
            this.savedItems.remove(item);
        }
    }
    isInCart(item){
        if (this.itemsInCart.indexOf(item) !== -1){
            return true;
        }else {
            return false;
        }
    }
}