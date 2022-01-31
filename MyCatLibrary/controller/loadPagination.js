function loadPagination(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc', {
        method: 'GET',
        headers: {
            'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
        }}).then(res => res.headers.get('Pagination-Count'))
        .then(totalCount => {
            let pagesCount = Math.floor(totalCount/10) + 1;
            pagesCount = makeItAnArray(pagesCount);
            renderPaginatedPage(pagesCount);
        });
//we're gonna use fixed 10 pic per page
    function renderPaginatedPage(pagesCount){
        fetch('view/pagination.hbs')
            .then(res => res.text())
            .then(html => {
                let templ = Handlebars.compile(html);
                let result = templ({pagesCount});
                document.getElementById('main-container').innerHTML = result;
                window.addEventListener('click', event => {
                    if (event.target.id.startsWith('page')){
                        let pageNum = event.target.text;
                        displayPage(pageNum);
                    }
                })
            })
    }

    function displayPage(page){
        document.getElementById('search-box').innerHTML ='';
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page-1}&order=Desc`, {
            method: 'GET',
            headers: {
                'x-api-key': '220898b9-5494-49ab-8116-79fe8cce108d'
            }}).then(res => res.json())
            .then(data => {
                data.map(cat =>{
                    let url = cat.url;
                    let catCard = document.createElement('img');
                    catCard.classList.add('img-thumbnail');
                    catCard.style.maxWidth = '100px';
                    catCard.src = url;
                    document.getElementById('search-box').appendChild(catCard);
                })
            });
    }

    function makeItAnArray(count){
        let result =[];

        for (let i = 1; i <= count; i++) {
            result.push(i);
        }
        return result;
    }
}