class Recipe{
    constructor(title, href, ingredients, thumbnail, liked) {
        this.title = title;
        this.href = href;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
        this.isLiked = liked;
        this.uuid = this.createUuid(title);
    }

    createUuid(title){
        while (title.indexOf(' ') !== -1){
            title = title.toLowerCase().replace(' ', '');
        }
        return title;
    }
}