function loadAlertRegister(type){

    if (type === 'exists'){
        fetch('view/alertsViews/alertUserExist.hbs')
            .then(res => res.text())
            .then(templ => {
                document.getElementById('search-box').innerHTML = templ;
            });

    }else if(type === 'noMatch'){
        fetch('view/alertsViews/alertNoPassMatch.hbs')
            .then(res => res.text())
            .then(templ => {
                document.getElementById('search-box').innerHTML = templ;
            });
    }
}