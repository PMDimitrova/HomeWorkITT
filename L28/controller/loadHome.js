function loadHome(){
    fetch('view/homeTemp.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('content').innerHTML = templ;
        });
}