import './App.css';
import { Outlet } from 'react-router-dom';
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
