import { MdPostAdd, MdMessage, MdHome } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdHome />
        MiguelBin
      </h1>
      <nav>
        <Link className={classes.navLink} to='/'>
          Home
        </Link>
        <Link className={classes.navLink} to='/'>
          Players
        </Link>
        <Link className={classes.navLink} to='/my-squad'>
          My Squad
        </Link>
      </nav>
      <p>
        <Link className={classes.button} to='/post'>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
