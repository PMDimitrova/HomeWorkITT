(function (){
    if (!(localStorage.getItem('loggedUser'))){
        loadLogin();
    }else {
        loadHome();
    }

    document.getElementById('homePage').addEventListener('click', loadHome);

    document.getElementById('logMeBtn').addEventListener('click', loadLogin);

    document.getElementById('RegMeBtn').addEventListener('click', loadRegister);

    document.getElementById('homeMyLocations').addEventListener('click', loadMyCountries);


    //todo make the buttons clickable on content load
    window.addEventListener('click', (event) => {
            event.preventDefault();
        if (event.target.id.startsWith('like-') ){
            console.log(event.target.id)
            let name = event.target.id.split('-')[1];
            userStorage.likeCountry(name);
        }else if(event.target.id.startsWith('info-')){
            console.log(event.target.id)
            let name = event.target.id.split('-')[1];
            showMoreInfo(name);
        }
    });
})()