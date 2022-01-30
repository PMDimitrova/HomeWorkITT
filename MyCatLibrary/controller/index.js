(function (){
    // loadHome();
    loadSearchPage()
    document.getElementById('myCatLibHome').addEventListener('click', loadHome);

    document.getElementById('homeSearch').addEventListener('click', loadSearchPage);

    document.getElementById('homeAllCats').addEventListener('click', loadAllCats);

    document.getElementById('homeRandomBtn').addEventListener('click', loadHome);

    document.getElementById('logMeBtn').addEventListener('click', loadLogin);

    document.getElementById('RegMeBtn').addEventListener('click', loadRegister);

})()