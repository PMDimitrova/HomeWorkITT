function loadMyProfile(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    let likedCatsIds = JSON.parse(localStorage.getItem('loggedUser')).likedCats;

    let myCats = [];

    JSON.parse(localStorage.getItem('loggedUser')).likedCats.map(catId => {
        catStorage.cats.map(cat => console.log(cat))
            let catName = catStorage.cats.filter(c => c.id === catId);
            console.log(catName)
        }
    )
}