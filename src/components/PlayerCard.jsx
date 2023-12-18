import React from 'react';
import classes from './PlayerCard.module.css';

function PlayerCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.position}>{props.position}</div>
      <div className={classes.rating}>Rating: {props.overall}</div>
      <div className={classes.stats}>
        <div className={classes.row}>
          <div className={classes.label}>Pace</div>
          <div className={classes.value}>{props.pace}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Shooting</div>
          <div className={classes.value}>{props.shooting}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Passing</div>
          <div className={classes.value}>{props.passing}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Dribbling</div>
          <div className={classes.value}>{props.dribbling}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Defending</div>
          <div className={classes.value}>{props.defending}</div>
        </div>
        <div className={classes.row}>
          <div className={classes.label}>Physicality</div>
          <div className={classes.value}>{props.physicality}</div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
