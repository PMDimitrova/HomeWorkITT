function changeLoggedUserController(action){

    if (action === 'login'){
        fetch('view/loggedUserController.hbs')
            .then(res => res.text())
            .then(html => {
                document.getElementById('controller-container').innerHTML = html;

                document.getElementById('myProfBtn').addEventListener('click', loadMyProfile);
                document.getElementById('logOutBtn').addEventListener('click', userStorage.logoutUser);

            })
    }
    if (action === 'logout'){
        fetch('view/unloggedUserController.hbs')
            .then(res => res.text())
            .then(html => {
                document.getElementById('controller-container').innerHTML = html;

                document.getElementById('RegMeBtn').addEventListener('click', loadRegister);
                document.getElementById('logMeBtn').addEventListener('click', loadLogin);

            })
    }


}