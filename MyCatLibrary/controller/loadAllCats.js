function loadAllCats(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('view/catCard.hbs')
        .then(res => res.text())
        .then(html => {
            fetch('https://api.thecatapi.com/v1/breeds', {
                method: 'GET',
                headers: {
                    'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
                }}).then(res => res.json())
                .then(data => {
                    data.map(cat => {
                        let templ = Handlebars.compile(html);
                        let result = templ(cat);
                        document.getElementById('main-container').innerHTML += result;
                    });
                });
        });
}