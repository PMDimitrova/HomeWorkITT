function register(){
    fetch('view/registerTemp.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('content').innerHTML = templ;
            document.getElementById('reg-me-btn').addEventListener('click', (ev) => {
                ev.preventDefault()
                let username = document.getElementById('registerUsername').value.trim();
                let pass = document.getElementById('registerPassword').value.trim();
                let repass = document.getElementById('registerRePassword').value.trim();
                let success = userStorage.registerUser(username, pass, repass);
                if (success){
                    loadHome();
                }
                console.log(username, pass, repass)
            })
        });
}