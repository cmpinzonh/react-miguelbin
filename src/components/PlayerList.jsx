import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Box, TextField, Button, InputAdornment} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import PlayerCard from './PlayerCard';
import classes from './PlayerList.module.css';

function PlayerList() {
  const data = useLoaderData();
  console.log(data)

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((player) =>
  player.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
     <TextField 
      label="Search players"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <CiSearch />
          </InputAdornment>
        ),
      }}
    />
    <div className='d-flex flex-wrap space-between'>
      {filteredData.map(player => (
        <PlayerCard 
          className={classes.card}
          key={player.id}
          name={player.name}
          position={player.position}
          overall={player.rating}
          pace={player.pace}
          shooting={player.shooting}
          passing={player.passing}
          dribbling={player.dribbling}
          defending={player.defending}
          physicality={player.physicality}
        />
      ))}
      </div>
    </>
  );
}

export default PlayerList;
