import { MdPostAdd, MdMessage, MdHome } from 'react-icons/md';

import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.navLink} to='/'>
      <h1 className={classes.logo}>
        <MdHome />
        MiguelBin
      </h1>
      </Link>
      <nav>
        <Link className={classes.navLink} to='/'>
          Home
        </Link>
        <Link className={classes.navLink} to='/'>
          Players
        </Link>
        <Link className={classes.navLink} to='/mysquad'>
          My Squad
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
