function loadHome(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('view/randomCat.hbs')
        .then(res => res.text())
        .then(html => {
            fetch('https://api.thecatapi.com/v1/images/search',{
                method: 'GET',
                headers: {
                    'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
                }})
                .then(res => res.json())
                .then(data => {
                    let catUrl = data[0].url;
                    let templ = Handlebars.compile(html);
                    let result = templ({catUrl});
                    document.getElementById('content-container').innerHTML = result;
                })
        })

    function loadCatImage(){

    }
}