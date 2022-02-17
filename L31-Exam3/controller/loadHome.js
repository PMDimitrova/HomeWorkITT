function loadHome(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('view/searchPage.hbs')
        .then(res => res.text())
        .then(html => {
            document.getElementById('search-box').innerHTML = html;
            document.getElementById('inputSearch').addEventListener('input', debouncedSearchByName)
        });


    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => {
            let currentCountry = {};

            countries.map(c => {
                // console.log(c)
                //                flag                    name                capital                 latitude              longitude
                // console.log(c.flags.png + ' - ' + c.name.common + ' - ' + c.capital + ' - ' +  c.latlng[0] + ' - ' +  c.latlng[1] )
                currentCountry = {
                    flag: `${c.flags.png}`,
                    name: `${c.name.common}`,
                    capital: `${c.capital}`,
                    latitude: `${c.latlng[0]}`,
                    longitude: `${c.latlng[1]}`,
                    id: `${c.cca2}`
                }
                displayCountry(currentCountry);
            })
        });



    function debounce(func, time){
        let timeoutId;
        return function(){
            clearTimeout(timeoutId);
            timeoutId = setTimeout(func, time);
        }
    }

    function searchCountry(){
        let usersInput = document.getElementById('inputSearch').value;
        document.getElementById('main-container').innerHTML = '';
        fetch(`https://restcountries.com/v3.1/name/${usersInput}`)
            .then(res => res.json())
            .then(countries => {
                // console.log(countries)
                let currentCountry = {};

                countries.map(c => {
                    currentCountry = {
                        flag: `${c.flags.png}`,
                        name: `${c.name.common}`,
                        capital: `${c.capital}`,
                        latitude: `${c.latlng[0]}`,
                        longitude: `${c.latlng[1]}`,
                        id: `${c.cca2}`
                    }
                    displayCountry(currentCountry);
                })
            });
    }



    let debouncedSearchByName = debounce(searchCountry, 500);

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