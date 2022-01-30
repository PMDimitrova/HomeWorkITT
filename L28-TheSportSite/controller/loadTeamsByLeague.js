function loadTeamsByLeague(league){
    let leagueName = '';

    if (league === 'first'){
        leagueName = 'Bulgarian%20First%20League';
    }else if (league === 'second'){
        leagueName = 'Bulgarian%20Second%20League';
    }

    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${leagueName}`)
        .then(res => res.json())
        .then(data => {
            data.teams.map(team => {
                createCardOfTeam(team);
            })
        })
}