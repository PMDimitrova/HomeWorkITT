function getAllTeams(){

    fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=Bulgaria&s=Soccer')
        .then(res => res.json())
        .then(data => {
            let leaguesNames = [];
            data.countrys.map(entry => leaguesNames.push(entry.strLeague.trim()))
            leaguesNames = removeIntervals(leaguesNames);

            let promisesForTeams = [];

            leaguesNames.map(entry => {
                // console.log(entry)
                promisesForTeams.push(fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${entry}`).then(res => res.json()))
            })
            Promise.all(promisesForTeams)
                .then(leagues =>leagues.map(leag => leag.teams.map(team => {
                    createCardOfTeam(team)
                    // console.log(team)
                })))
        })

    function removeIntervals(array){
        let res = []
        array.map(entry =>{
            let result = entry.split(' ');
            res.push(result.join('%20'));
        })
        return res;
    }
}