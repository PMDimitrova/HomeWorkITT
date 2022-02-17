function showMoreInfo(name){
    document.getElementById('search-box').innerHTML ='';
    document.getElementById('main-container').innerHTML ='';

    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => {
            let flagUrl = data[0].flags.png;
            let name = data[0].name.common;
            let latitude = data[0].latlng[0];
            let longitude = data[0].latlng[1];

            get6SHoursInfo(flagUrl, name, latitude, longitude);
        });

    function get6SHoursInfo(flagUrl, name, latitude, longitude){
        fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let hoursData = [];

                for (let i = 0; i < 6; i++) {
                    let hour = new Date(data.properties.timeseries[i].time);
                    let temp = data.properties.timeseries[i].data.instant.details.air_temperature;
                    hoursData.push({hour, temp});
                }
                console.log(hoursData);
                let cardData = {
                    flag: flagUrl,
                    name: name,
                    hoursData
                }

                displayDetailedInfoCard(cardData);
            })
    }

    function displayDetailedInfoCard(cardData){
        fetch('view/detailForecastCard.hbs')
            .then(res => res.text())
            .then(html => {
                let templ = Handlebars.compile(html);
                let result = templ(cardData);
                document.getElementById('main-container').innerHTML += result;
            })
    }
}
