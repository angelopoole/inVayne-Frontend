import React, { Component } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ProfilePage = () => {

    const user = useSelector(state => state.user);

    let { username } = user

    let deleteUserHandler = (id) => {
        console.log(id, "Clicked!")

        fetch(`http://localhost:3000/delUser`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user_id: id})
        }).then(r => r.json())
        .then(console.log())
    }

    // console.log(user.username)
    // we need a way to save user.champions to state then display them using the championCard Component
    // we will also give it a property to distinguis it b/w the champindex and the profileFavorites. 

    return (
        <div>
            <button onClick={() => deleteUserHandler(user.id)}> Delete  </button>
            <h1>WELCOME {username ? username : ", PLEASE SIGN UP"}</h1>
            This is the profile page, here we will display the profile of the user. favorites will be displayed here!
        </div>
    )
}

export default ProfilePage