import React from 'react'
import { Switch, Route } from 'react-router-dom';
import '../Styles/master.scss';
import Home from './Home';
import ChampionIndex from './ChampionIndex';
import ChampionShow from './ChampionShow';
import Profile from './Profile';
import Auth from './Auth';
import SummonerLookup from './SummonerLookup';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/champions" component={ChampionIndex} />
            <Route exact path="/champion/:id" component={ChampionShow} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path ="/SummonerLookup" component={SummonerLookup} />
        </Switch>
    );
}