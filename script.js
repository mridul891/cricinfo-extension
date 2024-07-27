const url = "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard"
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'a2038168camshbdb916781fbbddap1efab6jsndbe2a509b615',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};
const getinfo = async () => {
    try {
        const First_Team = document.querySelector('.teamname1')
        const Second_Team = document.querySelector(".teamname2");

        // Fetching the  Response 
        const response = await fetch(url, options);
        const res = await response.json();
        const batteam = await res.scoreCard[0].batTeamDetails.batTeamShortName
        const bowlteam = await res.scoreCard[0].bowlTeamDetails.bowlTeamShortName
        console.log({ batteam, bowlteam })

       
    } catch (errors) {
        console.log(errors)
    }
}

getinfo