import React from "react";
import { PlayerProvider } from '../players/PlayerProvider';
import { useParams } from 'react-router-dom';
import classes from './PlayerProfile.module.css';
import usePlayerStats from './UsePlayerStats';

const StatsCard = ({ stats, increaseStats, isToggled }) => {
  return (
    <div className={classes.card}>
      
        <div className={classes.cardBody}>
          <h1 className={classes.cardTitle}>Player Stats</h1>
          <p className={classes.cardText}>Position: {stats.position}</p>
          <p className={classes.cardText}>Rating: {isToggled ? stats.rating + 2 : stats.rating}</p>
          <p className={classes.cardText}>Pace: {isToggled ? stats.pace + 2 : stats.pace}</p>
          <p className={classes.cardText}>Shooting: {isToggled ? stats.shooting + 2 : stats.shooting}</p>
          <p className={classes.cardText}>Passing: {isToggled ? stats.passing + 2 : stats.passing}</p>
          <p className={classes.cardText}>Dribbling: {isToggled ? stats.dribbling + 2 : stats.dribbling}</p>
          <p className={classes.cardText}>Defending: {isToggled ? stats.defending + 2 : stats.defending}</p>
          <p className={classes.cardText}>Physicality: {isToggled ? stats.physicality + 2 : stats.physicality}</p>
        </div>
      
    </div>
  );
};

const PlayerProfile = ({ props }) => {
  const { id } = useParams();
  const provider = new PlayerProvider();
  const player = provider.getPlayerById(id);
  const [stats, increaseStats] = usePlayerStats(player);
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <div className="d-flex flex-wrap space-between">
      <div className={classes.card}>
        <img className={classes.playerImage} src={player.image} alt={player.name} />
        <h2 className={classes.cardTitle}>{player.name}</h2>
        <p className={classes.cardText}>{player.position}</p>
      </div>
      <StatsCard stats={stats} increaseStats={increaseStats} isToggled={isToggled} />
      <button onClick={() => setIsToggled(!isToggled)}>Toggle Stat Increase</button>
    </div>
  );
};

export default PlayerProfile;
