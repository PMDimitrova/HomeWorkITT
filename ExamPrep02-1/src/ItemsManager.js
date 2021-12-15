class ItemsManager {
    constructor() {
        this.items = [];
    }

    add(item){
        if (item instanceof Item && (this.items.indexOf(item) === -1)){
            this.items.push(item);
        }
    }
}