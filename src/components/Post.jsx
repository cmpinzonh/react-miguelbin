import classes from './Post.module.css';

function Post({playerName, team}) {
    
    return( 
    <div className={classes.post}>
        <p className= {classes.playerName}> {playerName} </p>
        <p className= {classes.team}> {team} </p>
    </div>
    );
}

export default Post;
