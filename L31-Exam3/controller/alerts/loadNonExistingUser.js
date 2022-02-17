function loadNonExistingUser(){
    fetch('view/alertsViews/alertUserNotExisting.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('search-box').innerHTML = templ;
        });
}