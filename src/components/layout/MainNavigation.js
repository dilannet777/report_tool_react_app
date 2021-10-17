import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation() {


  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reports Tool</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Reports</Link>
          </li>
 
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;