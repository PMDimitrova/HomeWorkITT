function loadMyCountries(){
    //      !!!!!!!!!!!!!!!!!
    //IF WE SKIP FROM HOME PAGE TO MY LOCATIONS AND NOT ALL OF THE COUNTRIES IN THE HOME PAGE ARE LOADED,
    //THEY WILL CONTINUE LOADING IN THE 'MY LOCATIONS' PAGE
    //      !!!!!!!!!!!!!!!!!

    if (!(localStorage.getItem('loggedUser'))){

        fetch('view/alertsViews/alertNotLogged.hbs')
            .then(res => res.text())
            .then(html => {
                document.getElementById('search-box').innerHTML = html;
                document.getElementById('main-container').innerHTML ='';
            })

    }else {

        let likedCountries = userStorage.getLikedCountries(); //this would be []
        if (!likedCountries){
            document.getElementById('search-box').innerHTML ='';
            document.getElementById('main-container').innerHTML ='';
            let errorMessage = document.createElement('h1');
            errorMessage.innerHTML = 'You have not liked any country yet!';
            document.getElementById('main-container').append(errorMessage);

        }else{
            document.getElementById('search-box').innerHTML ='';
            document.getElementById('main-container').innerHTML ='';
            likedCountries.map(countryName =>{
                fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                    .then(res => res.json())
                    .then (country => {
                        // console.log(country)
                    let currentCountry = {};

                    country.map(c => {
                        currentCountry = {
                            flag: `${c.flags.png}`,
                            name: `${c.name.common}`,
                            capital: `${c.capital}`
                        }
                        displayCountry(currentCountry);
                    })
                })
            })
        }
    }

    function displayCountry(country){
        // console.log(country)
        fetch('view/countryCard.hbs')
            .then(res => res.text())
            .then(html => {
                let templ = Handlebars.compile(html);
                let result = templ(country);
                document.getElementById('main-container').innerHTML += result;
            })
    }
}