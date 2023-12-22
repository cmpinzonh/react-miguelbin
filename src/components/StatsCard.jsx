import React from "react";
import classes from '../routes/PlayerProfile.module.css';

const StatsCard = ({ stats, modifyStats }) => {
  return (
    <div className={classes.card}>
      
        <div className={classes.cardBody}>
          <h1 className={classes.cardTitle}>Player Stats</h1>
          <p className={classes.cardText}>Position: {stats.position}</p>
          <p className={classes.cardText}>Rating: {stats.rating}</p>
          <p className={classes.cardText}>Pace: {stats.pace}</p>
          <p className={classes.cardText}>Shooting: {stats.shooting}</p>
          <p className={classes.cardText}>Passing: {stats.passing}</p>
          <p className={classes.cardText}>Dribbling: {stats.dribbling}</p>
          <p className={classes.cardText}>Defending: {stats.defending}</p>
          <p className={classes.cardText}>Physicality: {stats.physicality}</p>
          <button className={classes.button} onClick={() => modifyStats((stat) => stat + 2)}>Apply Basic Boost</button>
          <a href={`/players/${stats.id}`} key={stats.id}>
          <button className={classes.button} >Reset Stats</button>
          </a>
          
          <button className={classes.button}>Add to my Squad</button>
          
        </div>
      
    </div>
  );
};

export default StatsCard;