import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/Champions">championIndex</Link>
      <Link to="/auth">login/register</Link>
      <Link to="/SummonerLookup"> summoner lookup </Link>
    </nav>
  );
}