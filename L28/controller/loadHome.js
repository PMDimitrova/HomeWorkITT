function loadHome(){
    let fetchSearch = fetch('view/loadSearchBar.hbs').then(res => res.text());
    let fetchHome = fetch('view/homeTemp.hbs').then(res => res.text());

    Promise.all([fetchSearch, fetchHome])
        .then(templates => {
            document.getElementById('search-bar-container').innerHTML = templates[0];
            document.getElementById('teams-container').innerHTML += templates[1];
            getAllTeams();
        })

}