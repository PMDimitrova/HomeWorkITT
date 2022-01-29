(function(){
    document.getElementById('loginBtn').addEventListener('click',loadLogin);
    document.getElementById('regBtn').addEventListener('click',register);

    document.getElementById('chooseFirstLeag').addEventListener('click', () => {
        loadTeamsByLeague('first');
    });
    document.getElementById('chooseSecondLeag').addEventListener('click',() => {
        loadTeamsByLeague('second');
    });
    document.getElementById('chooseAll').addEventListener('click',loadHome);

    document.getElementById('home-logo').addEventListener('click', loadHome)

    loadHome();
})()