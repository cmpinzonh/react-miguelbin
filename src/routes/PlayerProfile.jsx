import React from "react";
import { PlayerProvider } from '../players/PlayerProvider';
import { useParams } from 'react-router-dom';
import classes from './PlayerProfile.module.css';
import usePlayerStats from '../helpers/hooks/UsePlayerStats';
import StatsCard from "../components/StatsCard";

const PlayerProfile = () => {
  const { id } = useParams();
  const provider = new PlayerProvider();
  const player = provider.getPlayerById(id);
  const [stats, modifyStats] = usePlayerStats(player);

  return (
    <div className="d-flex flex-wrap space-between">
      <div className={classes.card}>
        <img className={classes.playerImage} src={player.image} alt={player.name} />
        <h2 className={classes.cardTitle}>{player.name}</h2>
        <p className={classes.cardText}>{player.position}</p>
      </div>
      <StatsCard stats={stats} modifyStats={modifyStats} />
    </div>
  );
};

export default PlayerProfile;
