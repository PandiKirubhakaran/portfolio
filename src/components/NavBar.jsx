import { Link } from 'react-router-dom';
import classes from '../assets/styles/NavBar.module.css';
import styles from '../assets/styles/App.module.css'
import { NAVBARTITLES, Routes } from '../enum';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={classes.navBar}>
        <ul className={classes.navBarContainer}>
          <li>
            <Link to={Routes.HOME}>{NAVBARTITLES.HOME_TITLE}</Link>
          </li>
          <li>
            <Link to={Routes.ABOUT}>{NAVBARTITLES.ABOUT_TITLE}</Link>
          </li>
          <li>
            <Link to={Routes.PROJECTS}>{NAVBARTITLES.PROJECTS_TITLE}</Link>
          </li>
          <li>
            <Link to={Routes.SKILLS}>{NAVBARTITLES.SKILLS_TITLE}</Link>
          </li>
          <li>
            <Link to={Routes.CONTACT}>{NAVBARTITLES.CONTACT_TITLE}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
