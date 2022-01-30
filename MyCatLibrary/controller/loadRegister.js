function loadRegister(){

    fetch('view/registerForm.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('content-container').innerHTML = templ;
            document.getElementById('form-register').addEventListener('click', (event) =>{
                event.preventDefault();
                let username = document.getElementById('reg-username').value;
                let password = document.getElementById('reg-password').value;
                let repassword = document.getElementById('reg-respassword').value;
                userStorage.registerUser(username, password, repassword);
            })
        })
}