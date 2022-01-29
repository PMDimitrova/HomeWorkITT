function loadLogin(){
    fetch('view/loginTempl.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('content').innerHTML = templ;
            document.getElementById('log-me-btn').addEventListener('click', (ev) => {
                ev.preventDefault()
                let username = document.getElementById('loginUsername').value.trim();
                let pass = document.getElementById('loginPassword').value.trim();
                let success = userStorage.loginUser(username, pass);
                if (success){
                    loadHome();
                }
                console.log(username, pass)
            })
        });

}