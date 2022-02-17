function loadAlertLogin(){
    fetch('view/alertsViews/alertPassNotCorrect.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('search-box').innerHTML = templ;
        });
}