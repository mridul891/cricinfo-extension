// const url = "https://api.cricapi.com/v1/series?apikey=f5aa762a-fd95-46b8-a239-108563596cce&offset=0&search=India"
// // const url = "https://api.cricapi.com/v1/match_info?apikey=f5aa762a-fd95-46b8-a239-108563596cce&offset=0&id=cd10491a-4a2f-4fd1-bef9-3e1c4614732c"
const url ="https://cricbuzz-cricket.p.rapidapi.com/series/v1/archives/international"
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
        // const batteam = await res.scoreCard[0].batTeamDetails.batTeamShortName
        // const bowlteam = await res.scoreCard[0].bowlTeamDetails.bowlTeamShortName
        // console.log({ batteam, bowlteam })
        console.log(res)
        // First_Team.textContent = batteam
        // Second_Team.textContent = bowlteam
    } catch (error) {
        console.log(error)
    }
}
getinfo()