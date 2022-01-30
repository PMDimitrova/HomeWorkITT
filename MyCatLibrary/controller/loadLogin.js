function loadLogin() {
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch('view/loginForm.hbs')
        .then(res => res.text())
        .then(templ => {

            document.getElementById('main-container').innerHTML = templ;
            document.getElementById('form-login').addEventListener('click', (event) =>{
                event.preventDefault();
                let username = document.getElementById('log-username').value;
                let password = document.getElementById('log-password').value;

                let success = userStorage.loginUser(username, password);

                if (success){
                    loadHome();
                }
            })
        })
}