function loadAlertRegister(type){
    if (type === 'exists'){
        fetch('view/alertUserExist.hbs')
            .then(res => res.text())
            .then(templ => {
                document.getElementById('register-alerts').innerHTML = templ;
            });

    }else if(type === 'noMatch'){
        fetch('view/alertNoPassMatch.hbs')
            .then(res => res.text())
            .then(templ => {
                document.getElementById('register-alerts').innerHTML = templ;
            });
    }
}