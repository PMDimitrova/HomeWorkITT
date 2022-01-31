let catStorage = (function (){
    class CatStorage {
        constructor() {
            this.getAllCatsData()
                .then(data => this.cats = data);
        }

        getAllCatsData(){
            return fetch('https://api.thecatapi.com/v1/breeds', {
                method: 'GET',
                headers: {
                    'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
                }}).then(res => res.json());
        }
    }
    return new CatStorage();
})()