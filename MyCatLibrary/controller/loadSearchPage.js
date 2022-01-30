function loadSearchPage(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('view/searchPage.hbs')
        .then(res => res.text())
        .then(html => {
            document.getElementById('search-box').innerHTML = html;
            document.getElementById('inputSearch').addEventListener('input', debouncedSearchBreed)
        });

    function debounce(func, time){
        let timeoutId;
        return function(){
            clearTimeout(timeoutId);
            timeoutId = setTimeout(func, time);
        }
    }

    function searchBreed(){
        let usersInput = document.getElementById('inputSearch').value;
        document.getElementById('main-container').innerHTML = '';
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${usersInput}`, {
            method: 'GET',
            headers: {
                'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
            }}).then(res => res.json())
            .then(cats => {
                if (cats.length === 0){ //no match for the search
                    //todo display alert
                }else{
                    fetch('view/searchCatCard.hbs')
                        .then(res => res.text())
                        .then(html => {
                            cats.map(c => {
                                let templ = Handlebars.compile(html);
                                let result = templ(c);
                                document.getElementById('main-container').innerHTML += result;
                            })
                        })
                }
            })
    }

    let debouncedSearchBreed = debounce(searchBreed, 350);
}