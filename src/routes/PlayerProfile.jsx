import React from "react";
import { PlayerProvider } from '../players/PlayerProvider';
import { useParams } from 'react-router-dom';
import { Image } from "react-bootstrap";


const PlayerProfile = ({ props }) => {

    const { id } = useParams();
    console.log(id);
    const provider = new PlayerProvider();
    const player = provider.getPlayerById(id);

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Position: {player.position}</p>
      <p>Rating: {player.rating}</p>
      <p>Pace: {player.pace}</p>
      <p>Shooting: {player.shooting}</p>
      <p>Passing: {player.passing}</p>
      <p>Dribbling: {player.dribbling}</p>
      <p>Defending: {player.defending}</p>
      <p>Physicality: {player.physicality}</p>
      <Image src={player.image} />
    </div>
  );
};

export default PlayerProfile;
