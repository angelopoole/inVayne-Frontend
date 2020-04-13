// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { useEffect , useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/index';
import Nav from './components/Nav'
import { connect, useSelector, useDispatch } from 'react-redux';




function App() {
  const champions = useSelector(state => state.champions);
  const dispatch = useDispatch();
  // console.log('doggos from the store =========> ', Champions);
// console.log(champions)

useEffect(() => {
  fetchForChampions();
  persistUser();
}, []);

// This will get the initial champions from the database and set them to redux state 
const fetchForChampions = () => {
  fetch('http://localhost:3000/champions')
  .then(r => r.json())
  .then(champs => {
    const action = {
      type: 'SET_CHAMPIONS',
      payload: champs
    };
    dispatch(action);
  }
  );
}

// This will check to see if theres a current statre in the local storage and if there is will presist user info. 

const persistUser = () => {
  if (localStorage.getItem("token")) {
    fetch("http://localhost:3000/auth", {
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then(handlePersistResponse)
  } else {
    return null
  }
}

const handlePersistResponse = (resp) => {
  if (resp.user) {
    localStorage.token = resp.token
    // console.log(resp, "resp <<<<---")
    //this.setState(resp, () => {this.props.history.push('/profile')}) else {alert(resp.error)
  }
}


    console.log(champions)
    
    
    
    
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;

