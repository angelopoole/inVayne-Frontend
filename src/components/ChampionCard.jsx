// import React, { useState } from 'react';
import React from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'


import { useDispatch, useSelector } from 'react-redux';


function ChampionCard(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    console.log(localStorage.token)

    let favoriteChampion = (champion) => {
        fetch(`http://localhost:3000/championlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({ champion_id: champion, user_id: user.id })
        }).then(r => r.json())
            .then(data => console.log(data))
    }



    // .then(r => {
    //     this.setState({
    //       user: {
    //         ...this.state.user,
    //         championlists: [...this.state.user.championlists, r]
    //       }
    //     })
    //   }
    //   )




    let champ = props.champion
    let { id, name, key, title, blurb, info, image, tags, partype, stats } = champ

    return (
        <Card>
            <h4>{name} : {title}</h4>
            {blurb}
            <Button positive onClick={() => favoriteChampion(id)} > Favorite! </Button>
        </Card>
    )
}

export default ChampionCard


// id: 295
// name: "Zoe"
// key: 142
// title: "the Aspect of Twilight"
// blurb: "As the embodiment of mischief, imagination, and change, Zoe acts as the cosmic messenger of Targon, heralding major events that reshape worlds. Her mere presence warps the arcane mathematics governing realities, sometimes causing cataclysms without..."
// info: "{"attack"=>1, "defense"=>7, "magic"=>8, "difficulty"=>5}"
// image: "Zoe.png"
// tags: (2) ["Mage", "Support"]
// partype: "Mana"
// stats