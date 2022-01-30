function createCardOfTeam(team){
    document.getElementById('teams-container').innerHTML = '';
    fetch('view/loadCard.hbs')
        .then(res => res.text())
        .then(html => {
            let template = Handlebars.compile(html);
            let result = template(team);
            document.getElementById('teams-container').innerHTML += result;
        })
}