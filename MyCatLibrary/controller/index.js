(function (){
    loadHome();
    localStorage.removeItem('loggedUser');
    // loadSearchPage()
    document.getElementById('myCatLibHome').addEventListener('click', loadHome);

    document.getElementById('homeSearch').addEventListener('click', loadSearchPage);

    document.getElementById('homeAllCats').addEventListener('click', loadAllCats);

    document.getElementById('homePaginationBtn').addEventListener('click', loadPagination);

    document.getElementById('homeRandomBtn').addEventListener('click', loadHome);

    document.getElementById('logMeBtn').addEventListener('click', loadLogin);

    document.getElementById('RegMeBtn').addEventListener('click', loadRegister);

    window.addEventListener('click', (event) => {
        if (event.target.id.startsWith('like-') ){
            let catId = event.target.id.slice(5); //getting the id of the cat
            userStorage.likeCat(catId);
            event.target.classList.add('disabled');
            console.log('likes')
        }
    });

})()