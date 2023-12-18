import { useState } from "react";
import { useLoaderData } from 'react-router-dom';
import Post from "./Post";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import classes from './PostsList.module.css';
import PlayerCard from "./PlayerCard";

function PostsList(){

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts(prevPosts => {
            return [postData, ...prevPosts];
        });
    }

    
  const data = useLoaderData();
  console.log(data[1].name)

    return (
        <>
        <ul className={classes.posts}>
            {posts.map((post) => {
                <Post key={post.body} playerName={post.name} team={post.body} />
            })}
            <Post playerName={"Player Name"} team={"Team"} />
            <PlayerCard
            name="Lionel Messi"
            position="RW"
            overall="93"
            pace="85"
            dribbling="96"
            shooting="92"
            passing="91"
            defending="39"
            physicality="66"
          />
        </ul>
        </>
    )

}

export default PostsList;
