import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import championCard from '../components/ChampionCard';
import ChampionCard from '../components/ChampionCard'
import {Card} from 'semantic-ui-react'


export default function ChampionIndex() {


    const champions = useSelector(state => state.champions)
    let emptyArr = []
    // console.log(champions)
    // const user = useSelector(state => state.user);
    // let cards = champions.forEach(champ => {
    //    return <ChampionCard
    //     champion={champ}

    //     />
    // })

    const renderChamps = () => {
        return !champions.length ? null : champions.map(champion => <ChampionCard key={champion.id} champion={champion} />);
    };


    return (
        <div>
            <Card.Group>{renderChamps()}</Card.Group>
            <h1>Champion Index page</h1>
        </div>
    );
}



// import React, { Component } from 'react'
// import ChampionCard from '../Components/championCard'
// import {withRouter} from 'react-router-dom'


// class championPage extends Component {

//     componentDidMount() {
//         if (!this.props.token) {
//             this.props.history.push("/login")
//         }

//     }

//     renderChampionCards = () => {
//         let champions = this.props.allChampions
//         // console.log(champions)
//         return champions.map(champion => {
//             // console.log(champion)
//             return <ChampionCard
//                 champion={champion}
//                 key={champion.id}
//                 handleCardDelete={this.props.handleCardDelete}
//                 handleCardBlurbChange={this.props.handleCardBlurbChange}
//                 creatingChampUserAssociation={this.props.creatingChampUserAssociation}
//             />
//         })
//     }


//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 {this.renderChampionCards()}
//             </div>
//         )
//     }
// }
// export default withRouter(championPage);