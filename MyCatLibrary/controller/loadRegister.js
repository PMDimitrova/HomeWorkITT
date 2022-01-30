function loadRegister(){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';
    fetch('view/registerForm.hbs')
        .then(res => res.text())
        .then(templ => {
            document.getElementById('main-container').innerHTML = templ;
            document.getElementById('form-register').addEventListener('click', (event) =>{
                event.preventDefault();
                let username = document.getElementById('reg-username').value;
                let password = document.getElementById('reg-password').value;
                let repassword = document.getElementById('reg-respassword').value;
                let success = userStorage.registerUser(username, password, repassword);

                if (success){
                    loadHome();
                }
            })
        })
}