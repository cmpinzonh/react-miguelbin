import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost({onCreatePost}) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');


  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeAuthorHandler(event) {
      setName(event.target.value);
    }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: body,
      name: name,
    };

    console.log(postData);
    onCreatePost(postData);
  }


  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Team</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
        </p>
        <p>
          <label htmlFor="name">Player name</label>
          <input type="text" id="name" required onChange={changeAuthorHandler}/>
        </p>
        <p className={classes.actions}>
          <Link type="button" to='..'>Cancel</Link>
          <button onClick={onCreatePost}>Submmit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;