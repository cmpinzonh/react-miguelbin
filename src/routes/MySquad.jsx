import React from 'react';
import { useState, useEffect } from "react";
import PlayerCard from '../components/PlayerCard';

function MySquad() {
  // const data = useLoaderData();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await require('../players/magicfc.json');
      setData(response.players);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
    <div className='d-flex flex-wrap space-between'>
      {data.map(player => (
        <div key={player.id}>
        <PlayerCard {...player}
        />
        </div>
      ))}
      </div>
    </>
  );
}

export default MySquad;
