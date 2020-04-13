import React, {useState} from 'react'

const SummonerLookup = () => {

    const [summonerLookup, setSummonerLookup] = useState({summoner: ''});

    console.log(summonerLookup);


    const handleChange = (e) => {
        setSummonerLookup({...summonerLookup, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let summoner = summonerLookup.summoner
        console.log(summoner)

        fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}`, {
            headers: {"X-Riot-Token": "RGAPI-454ba9ac-82c1-4320-81c0-c0174d629551"}
        })
        .then(r => r.json())
        .then(console.log())
    }

    return (
        <div>
            summoner lookup page
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' onChange={handleChange} name="summoner" ></input>
            </form>
        </div>
    )
}

export default SummonerLookup
