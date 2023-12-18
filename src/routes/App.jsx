import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';
import MainHeader from '../components/MainHeader';
import PlayerCard from '../components/PlayerCard'
import PlayerList from '../components/PlayerList';
import { PlayerProvider } from '../players/PlayerProvider';
import MainFooter from '../components/MainFooter';
function App() {
  return (
    <>
        <PlayerList/>
        <Outlet />
        <MainFooter />
    </>
  );
}

export default App;

export async function loader(){
  const provider = new PlayerProvider();
  return await provider.getAllPlayers();
}
