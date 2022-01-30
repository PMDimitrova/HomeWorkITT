function loadLogin() {
    fetch('view/loginForm.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('content-container').innerHTML = templ;
            document.getElementById('form-login').addEventListener('click', (event) =>{
                event.preventDefault();
                let username = document.getElementById('log-username').value;
                let password = document.getElementById('log-password').value;

                userStorage.loginUser(username, password);

            })
        })
}