class User{
    constructor() {
        this.savedItems = [];
        this.cartItems = [];
    }

    save(item){
        if (this.savedItems.indexOf(item) === -1){
            this.savedItems.push(item);
        }
    }

    unSave(item){
        if (this.savedItems.indexOf(item) !== -1){
            this.savedItems.splice(this.savedItems.indexOf(item), 1);
        }
    }

    addToCart(item){
        if (this.cartItems.indexOf(item) === -1){
            this.cartItems.push(item);
        }
        console.log('bought ' + item.itemName);
    }

    removeFromCart(item){
        if (this.cartItems.indexOf(item) !== -1){
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
        }
        console.log('removed from cart ' + item.itemName);
    }

    isInCart(item){
        return (this.cartItems.indexOf(item) !== -1);
    }

    isSaved(item){
        return (this.savedItems.indexOf(item) !== -1);
    }
}