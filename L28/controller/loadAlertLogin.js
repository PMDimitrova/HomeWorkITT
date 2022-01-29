function loadAlertLogin(){
    fetch('view/alertUserExist.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('login-alerts').innerHTML = templ;
        });
}