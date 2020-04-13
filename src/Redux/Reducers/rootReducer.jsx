
import {combineReducers} from 'redux';
import userReducer from './userReducer'
import  ChampionReducer from './championReducer'
// import the reducers to use in the application here. 


const state = {
    user: userReducer,
    champions: ChampionReducer
};

export default combineReducers(state);